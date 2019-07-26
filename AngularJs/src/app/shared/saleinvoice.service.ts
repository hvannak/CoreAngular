import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Saleinvoice } from './saleinvoice.model';
import { Saleinvoiceline } from './saleinvoiceline.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleinvoiceService {

  invoice:Saleinvoice;
  invoiceLine:Saleinvoiceline[];
  constructor(private http: HttpClient,private fb:FormBuilder) { }

  formInvoice = this.fb.group({
    SaleInvoiceId:[''],
    InvoiceNbr:['',Validators.required],
    CustomerId:['',Validators.required],
    CustomerName:[''],
    TranType:['',Validators.required],
    ProjectId:['',Validators.required],
    ProjectName:[''],
    DocDate:['',Validators.required],
    Currency:['',Validators.required],
    Description:[''],
    Types:[''],
    TotalQty:['',Validators.required],
    TotalWeight:['',Validators.required],
    TotalAmount:['',Validators.required],
    Release:[''],
    IsSyn:[''],
    DeletedInvoiceLineIDs:['']
  });

  formInvoiceLine = this.fb.group({
    SaleInvoiceLineId:[''],
    SaleInvoiceId:['',Validators.required],
    WarehouseId:['',Validators.required],
    WarehouseName:[''],
    InventoryDesc:[''],
    InventoryId:['',Validators.required],
    Qty:['',Validators.required],
    Weight:['',Validators.required],
    Unitprice:['',Validators.required],
    ExtAmount:['',Validators.required],
  });

  getInvoiceList() {
    return this.http.get(environment.apiURL + '/SaleInvoice').toPromise();
  }

  getInvoiceByID(id:number):any {
    return this.http.get(environment.apiURL + '/SaleInvoice/'+id).toPromise();
  }

  getInvoiceByDate(from:Date,to:Date){
    return this.http.get(environment.apiURL + '/SaleInvoice/InvoiceByDate/'+ from + "/" + to).toPromise();
  }

  postInvoice(){
    var body = {
      ...this.formInvoice.value,
      SaleInvoiceLines: this.invoiceLine
    };
    return this.http.post(environment.apiURL + '/SaleInvoice', body);
  }

  putInvoice(){
    var body = {
      ...this.formInvoice.value,
      SaleInvoiceLines: this.invoiceLine
    };
    return this.http.put(environment.apiURL + '/SaleInvoice/' + this.formInvoice.value.SaleInvoiceId, body);
  }

  syncInvoice(item,branch){
    return this.http.put(environment.apiURL + '/SaleInvoice/Sync/' + branch, item).toPromise();
  }

  deleteInvoice(id:number) {
    return this.http.delete(environment.apiURL + '/SaleInvoice/'+id).toPromise();
  }
}
