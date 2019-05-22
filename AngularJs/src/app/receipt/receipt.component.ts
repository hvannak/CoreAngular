import { Component, OnInit, ViewChild } from '@angular/core';
import { ReceiptService } from '../shared/receipt.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Receipt } from '../shared/receipt.model';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  fromDate:Date;
  toDate:Date;
  displayedColumns: string[] = ['TranType','ReceiptNbr', 'Description','ReceiptDate','Delete'];
  receiptList: MatTableDataSource<Receipt>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: ReceiptService,
    private router: Router,
    private toastr: ToastrService) { 
      
    }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    //this.service.getReceiptList().then(res => this.receiptList = res);
    this.service.getReceiptList().then(res => {
      this.receiptList = new MatTableDataSource(res as Array<Receipt>);
      this.receiptList.paginator = this.paginator;
      this.receiptList.sort = this.sort;
    }); 
  }

  getReceiptByDate(from,to){
    this.service.getReceiptByDate(from,to).then(res => {
      this.receiptList = new MatTableDataSource(res as Array<Receipt>);
      this.receiptList.paginator = this.paginator;
      this.receiptList.sort = this.sort;
    }); 
  }

  openForEdit(receiptId: number) {
    this.router.navigate(['/receiptheader/edit/' + receiptId]);
  }

  onSubmit(){
    this.getReceiptByDate(this.getLocalDate(this.fromDate.toLocaleDateString()),this.getLocalDate(this.toDate.toLocaleDateString()));
  }

  applyFilter(filterValue: string) {
    this.receiptList.filter = filterValue.trim().toLowerCase();

    if (this.receiptList.paginator) {
      this.receiptList.paginator.firstPage();
    }
  }

  onReceiptDelete(id: number,status:number) {
    if(status == 1){
      this.toastr.error("You cannot delete completed record.", "Receipt Register.");
    }
    else{
      if (confirm('Are you sure to delete this record?')) {
        this.service.deleteReceipt(id).then(res => {
          this.refreshList();
          this.toastr.warning("Deleted Successfully", "Receipt Register.");
        });
      }
    }
   
  }

  getLocalDate(item:string){
    var ldate = item.split('/');
    var date = ldate[2] + '-' + ldate[0] + '-' + ldate[1];
    return date;
  }
}
