import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { SaleinvoiceService } from 'src/app/shared/saleinvoice.service';
import { ProjectService } from 'src/app/shared/project.service';
import { SaleinvoiceLineComponent } from '../saleinvoice-line/saleinvoice-line.component';
import { Customer } from 'src/app/shared/customer.model';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-saleinvoice-header',
  templateUrl: './saleinvoice-header.component.html',
  styleUrls: ['./saleinvoice-header.component.css']
})
export class SaleinvoiceHeaderComponent implements OnInit {

  deleteInvoiceLine:string;
  customerList: Customer[];
  projectList;
  constructor(private service:SaleinvoiceService,private router: Router,private currentRoute: ActivatedRoute,
    private toastr: ToastrService,private dialog: MatDialog,
    private projectService:ProjectService,private customerService:CustomerService) { }

  ngOnInit() {
    let invoiceId = this.currentRoute.snapshot.paramMap.get('id');
    this.customerService.getCustomerList().then(res => this.customerList = res as Customer[]);
    this.projectService.getActiveProject().then(res => this.projectList = res);
    if(invoiceId == null){
      this.service.formInvoice.reset();
      this.service.formInvoice.patchValue({
        SaleInvoiceId:0,
        Release:0,
        InvoiceNbr:'NEW'
      });
      this.service.invoiceLine = [];
      this.service.formInvoice.enable();
    }
    else{
      //edit
      this.service.invoiceLine = [];
      this.deleteInvoiceLine='';
      this.service.getInvoiceByID(parseInt(invoiceId)).then(res => {
        this.service.formInvoice.setValue({
          SaleInvoiceId:res.invoice['SaleInvoiceId'],
          InvoiceNbr:res.invoice['InvoiceNbr'],
          CustomerId:res.invoice['CustomerId'],
          CustomerName:res.invoice['CustomerName'],
          ProjectId:res.invoice['ProjectId'],
          ProjectName:res.invoice['ProjectName'],
          DocDate:res.invoice['DocDate'],
          Currency:res.invoice['Currency'],
          Description:res.invoice['Description'],
          TotalQty:res.invoice['TotalQty'],
          TotalAmount:res.invoice['TotalAmount'],
          Release:res.invoice['Release'],
          DeletedInvoiceLineIDs:''
        });
        if(this.service.formInvoice.value.Release == 1){
          this.service.formInvoice.disable();
        }
        else{
          this.service.formInvoice.enable();
        }
        this.service.invoiceLine = res.invoiceline;
      });

    }
  }

  AddOrEditInvoiceLine(invoiceLineIndex,invoiceId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { invoiceLineIndex, invoiceId };
    this.dialog.open(SaleinvoiceLineComponent, dialogConfig).afterClosed().subscribe(res => {
      this.updateGrandTotal();
    });
  }

  onDeleteInvoiceLine(invoiceLineId:number,i:number){
    if(invoiceLineId != null){
      this.deleteInvoiceLine += invoiceLineId + ",";
      this.service.invoiceLine.splice(i,1);
      this.updateGrandTotal();
    }
      
  }

  updateGrandTotal(){
    this.service.formInvoice.patchValue({
      TotalQty:this.service.invoiceLine.reduce((prev, curr) => {
        return prev + curr.Qty;
      }, 0),
      TotalCost:this.service.invoiceLine.reduce((prev,curr) => { 
        return prev + curr.ExtAmount;
      },0)
    });
  }

  onSubmit(){
    if(this.service.formInvoice.value.SaleInvoiceId == 0 ){
      if (confirm('Do you want to complete this record?')) {
        this.service.formInvoice.patchValue({
          Release:1
        });
        this.insertRecord();
      }
      else{
        this.insertRecord();
      }
    }
    else{
      if (confirm('Do you want to complete this record?')) {
        this.service.formInvoice.patchValue({
          Release:1
        });
        this.updateRecord();
      }
      else{
        this.updateRecord();
      }
      
    }
  }

  insertRecord(){
    this.service.postInvoice().subscribe(res => {
      this.service.formInvoice.reset();
      this.service.invoiceLine=[];
      this.toastr.success('Submitted Successfully','Invoice Register');
      this.router.navigate(['/invoice']);
    })
  }

  updateRecord(){
    this.service.formInvoice.patchValue({
      DeletedInvoiceLineIDs:this.deleteInvoiceLine
    });
    this.service.putInvoice().subscribe(res => {
      this.service.formInvoice.reset();
      this.deleteInvoiceLine='';
      this.service.invoiceLine = [];
      this.toastr.success('Submitted Successfully','Invoice Register');
      this.router.navigate(['/invoice']);
    })
  }

}
