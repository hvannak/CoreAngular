import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Saleinvoice } from 'src/app/shared/saleinvoice.model';
import { SaleinvoiceService } from 'src/app/shared/saleinvoice.service';
import { formatDate } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-saleinvoice-syn',
  templateUrl: './saleinvoice-syn.component.html',
  styleUrls: ['./saleinvoice-syn.component.css']
})
export class SaleinvoiceSynComponent implements OnInit {

  fromDate:Date;
  toDate:Date;
  displayedColumns: string[] = ['InvoiceNbr','CustomerName','ProjectName', 'Description','Currency','DocDate','TotalQty','TotalAmount','Sync'];
  invoiceList: MatTableDataSource<Saleinvoice>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: SaleinvoiceService) { }

  ngOnInit() {
    this.getInvoiceList();
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

  onSubmit(){
    this.getReceiptByDate(formatDate(this.fromDate,environment.format,environment.locale),formatDate(this.toDate,environment.format,environment.locale));
  }

  onInvoiceSync(item){
    this.service.syncInvoice(item);
  }

  applyFilter(filterValue: string) {
    this.invoiceList.filter = filterValue.trim().toLowerCase();

    if (this.invoiceList.paginator) {
      this.invoiceList.paginator.firstPage();
    }
  }
}
