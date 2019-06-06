import { Component, OnInit } from '@angular/core';
import { ReceiptService } from 'src/app/shared/receipt.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { InventoryService } from 'src/app/shared/inventory.service';
import { ProjectService } from 'src/app/shared/project.service';
import { ReceiptLineComponent } from '../receipt-line/receipt-line.component';
import { Receipt } from 'src/app/shared/receipt.model';

@Component({
  selector: 'app-receipt-header',
  templateUrl: './receipt-header.component.html',
  styleUrls: ['./receipt-header.component.css']
})
export class ReceiptHeaderComponent implements OnInit {

  deleteReceiptLine:string;
  constructor(private service:ReceiptService,private router: Router,private currentRoute: ActivatedRoute,
    private toastr: ToastrService,private dialog: MatDialog,private inventoryService:InventoryService,
    private projectService:ProjectService) { }

  ngOnInit() {
    let receiptId = this.currentRoute.snapshot.paramMap.get('id');
    if(receiptId == null){
      this.service.formReceipt.reset();
      this.service.formReceipt.patchValue({
        ReceiptId:0,
        Release:0,
        ReceiptNbr:'NEW'
      });
      this.service.receiptLine = [];
      this.service.formReceipt.enable();
    }
    else{
      //edit
      this.service.receiptLine = [];
      this.deleteReceiptLine='';
      this.service.getReceiptByID(parseInt(receiptId)).then(res => {
        this.service.formReceipt.setValue({
          TranType:res.receipt['TranType'],
          ReceiptId:res.receipt['ReceiptId'],
          ReceiptNbr:res.receipt['ReceiptNbr'],
          ReceiptDate:res.receipt['ReceiptDate'],
          Description:res.receipt['Description'],
          TotalQty:res.receipt['TotalQty'],
          TotalCost:res.receipt['TotalCost'],
          Release:res.receipt['Release'],
          DeletedReceiptLineIDs:''
        });
        if(this.service.formReceipt.value.Release == 1){
          this.service.formReceipt.disable();
        }
        else{
          this.service.formReceipt.enable();
        }
        this.service.receiptLine = res.receiptLine;
      });

    }
  }

  AddOrEditReceiptLine(receiptLineIndex,ReceiptId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { receiptLineIndex, ReceiptId };
    this.dialog.open(ReceiptLineComponent, dialogConfig).afterClosed().subscribe(res => {
      this.updateGrandTotal();
    });
  }

  onDeleteReceiptLine(receiptLineId:number,i:number){
    if(receiptLineId != null){
      this.deleteReceiptLine += receiptLineId + ",";
      this.service.receiptLine.splice(i,1);
      this.updateGrandTotal();
      console.log(receiptLineId);
      console.log(this.deleteReceiptLine);
    }
      
  }

  updateGrandTotal(){
    this.service.formReceipt.patchValue({
      TotalQty:this.service.receiptLine.reduce((prev, curr) => {
        return prev + parseFloat(curr.Qty.toString());
      }, 0),
      TotalCost:this.service.receiptLine.reduce((prev,curr) => { 
        return prev + curr.ExtCost;
      },0)
    });
  }

  onSubmit(){
    if(this.service.formReceipt.value.ReceiptId == 0 ){
      if (confirm('Do you want to complete this record?')) {
        this.service.formReceipt.patchValue({
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
        this.service.formReceipt.patchValue({
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
    this.service.formReceipt.patchValue({
      ReceiptDate: this.getLocalDate(this.service.formReceipt.value.ReceiptDate.toLocaleDateString())
    });
    this.service.postReceipt().subscribe(res => {
      this.service.formReceipt.reset();
      this.service.receiptLine=[];
      this.toastr.success('Submitted Successfully','Receipt Register');
      this.router.navigate(['/receipt']);
    })
  }

  updateRecord(){
    if(this.service.formReceipt.value.ReceiptDate.toLocaleString().indexOf('/') !== -1){
      this.service.formReceipt.patchValue({
        ReceiptDate: this.getLocalDate(this.service.formReceipt.value.ReceiptDate.toLocaleDateString())
      });
    }
    this.service.formReceipt.patchValue({
      DeletedReceiptLineIDs:this.deleteReceiptLine
    });
    this.service.putReceipt().subscribe(res => {
      this.service.formReceipt.reset();
      this.deleteReceiptLine='';
      this.service.receiptLine = [];
      this.toastr.success('Submitted Successfully','Receipt Register');
      this.router.navigate(['/receipt']);
    })
  }

  getLocalDate(item:string){
    var ldate = item.split('/');
    var date = ldate[2] + '-' + ldate[0] + '-' + ldate[1];
    return new Date(date);
  }
 
}
