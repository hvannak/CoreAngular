import { Component, OnInit, ViewChild } from '@angular/core';
import { SaleinvoiceService } from '../shared/saleinvoice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { Saleinvoice } from '../shared/saleinvoice.model';
import { formatDate } from '@angular/common';
import { environment } from 'src/environments/environment';
import { UploadComponent } from '../upload/upload.component';
import { ViewuploadComponent } from '../upload/viewupload/viewupload.component';

@Component({
  selector: 'app-saleinvoice',
  templateUrl: './saleinvoice.component.html',
  styleUrls: ['./saleinvoice.component.css']
})
export class SaleinvoiceComponent implements OnInit {

  fromDate:Date;
  toDate:Date;
  displayedColumns: string[] = ['InvoiceNbr','CustomerName','ProjectName', 'Description','Currency','DocDate','TotalQty','TotalAmount','Delete','Upload','ViewUpload'];
  invoiceList: MatTableDataSource<Saleinvoice>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: SaleinvoiceService,
    private router: Router,private dialog: MatDialog,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getInvoiceList();
  }

  AddUploadFile(ReceiptId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    const module = "AR";
    dialogConfig.data = { ReceiptId, module};
    this.dialog.open(UploadComponent, dialogConfig).afterClosed().subscribe(res => {
      console.log('done');
    });
  }

  viewUploadFile(ReceiptId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "100%";
    const module = "AR";
    dialogConfig.data = { ReceiptId,module };
    this.dialog.open(ViewuploadComponent, dialogConfig).afterClosed().subscribe(res => {
      console.log('done');
    });
  }

  getInvoiceList(){
    this.service.getInvoiceList().then(res => {
      this.invoiceList = new MatTableDataSource(res as Array<Saleinvoice>);
      this.invoiceList.paginator = this.paginator;
      this.invoiceList.sort = this.sort;
    });
  }

  getReceiptByDate(from,to){
    this.service.getInvoiceByDate(from,to).then(res => {
      this.invoiceList = new MatTableDataSource(res as Array<Saleinvoice>);
      this.invoiceList.paginator = this.paginator;
      this.invoiceList.sort = this.sort;
    }); 
  }

  onInvoiceDelete(id: number,status:number) {
    if(status == 1){
      this.toastr.error("You cannot delete completed record.", "Invoice Register.");
    }
    else{
      if (confirm('Are you sure to delete this record?')) {
        this.service.deleteInvoice(id).then(res => {
          let index = this.invoiceList.data.findIndex(x=>x.SaleInvoiceId == id);
          this.invoiceList.data.splice(index,1);
          this.invoiceList._updateChangeSubscription();
          this.toastr.warning("Deleted Successfully", "Invoice Register.");
        });
      }
    }
   
  }

  openForEdit(invoiceId: number) {
    this.router.navigate(['/invoiceheader/edit/' + invoiceId]);
  }

  onSubmit(){
    this.getReceiptByDate(formatDate(this.fromDate,environment.format,environment.locale),formatDate(this.toDate,environment.format,environment.locale));
  }

  applyFilter(filterValue: string) {
    this.invoiceList.filter = filterValue.trim().toLowerCase();

    if (this.invoiceList.paginator) {
      this.invoiceList.paginator.firstPage();
    }
  }

}
