import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { ReceiptLine } from './receipt-line.model';
import { Receipt } from './receipt.model';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  receipt:Receipt;
  receiptLine:ReceiptLine[];
  constructor(private http: HttpClient,private fb:FormBuilder) {
    let apiUrl = localStorage.getItem('apiURL');
    if(apiUrl != environment.apiURL && apiUrl != null){
      environment.apiURL = environment.apiURLocal;
    }
   }
  
  formReceipt = this.fb.group({
    TranType:['',Validators.required],
    ReceiptId:[''],
    ReceiptNbr:[''],
    Description:[''],
    ReceiptDate:['',Validators.required],
    TotalQty:[''],
    TotalCost:[''],
    Release:[''],
    DeletedReceiptLineIDs:['']
  });

  formReceiptLine = this.fb.group({
    ReceiptLineId:[''],
    ReceiptId:['',Validators.required],
    ProjectId:['',Validators.required],
    ProjectName:[''],
    Qty:['',Validators.required],
    QtyInWeight:['',Validators.required],
    UnitCost:['',Validators.required],
    ExtCost:['',Validators.required],
    WarehouseId:['',Validators.required],
    WarehouseName:[''],
    InventoryId:['',Validators.required],
    InventoryDesr:[''],
    Reason:['',Validators.required]
  });

  getReceiptList() {
    return this.http.get(environment.apiURL + '/Receipts').toPromise();
  }

  getReceiptByID(id:number):any {
    return this.http.get(environment.apiURL + '/Receipts/'+id).toPromise();
  }

  getReceiptByProjectdetail(projectId:number,tran:string,warehouseId:number,inventoryId:number,categoryId:number){
    return this.http.get(environment.apiURL + '/Receipts/ReceiptByProjectdetail/'+projectId+"/" + tran + "/" + warehouseId + "/" + inventoryId + "/" + categoryId).toPromise();
  }

  getReceiptByDate(from:Date,to:Date){
    return this.http.get(environment.apiURL + '/Receipts/ReceiptByDate/'+ from + "/" + to).toPromise();
  }

  postReceipt(){
    var body = {
      ...this.formReceipt.value,
      ReceiptLines: this.receiptLine
    };
    return this.http.post(environment.apiURL + '/Receipts', body);
  }

  putReceipt(){
    var body = {
      ...this.formReceipt.value,
      ReceiptLines: this.receiptLine
    };
    return this.http.put(environment.apiURL + '/Receipts/' + this.formReceipt.value.ReceiptId, body);
  }

  deleteReceipt(id:number) {
    return this.http.delete(environment.apiURL + '/Receipts/'+id).toPromise();
  }
}
