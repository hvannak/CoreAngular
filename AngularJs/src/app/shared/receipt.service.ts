import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http: HttpClient) { }

  getReceiptList() {
    return this.http.get(environment.apiURL + '/Receipts').toPromise();
  }

  getReceiptByID(id:number):any {
    return this.http.get(environment.apiURL + '/Receipts/'+id).toPromise();
  }

  deleteReceipt(id:number) {
    return this.http.delete(environment.apiURL + '/Receipts/'+id).toPromise();
  }
}
