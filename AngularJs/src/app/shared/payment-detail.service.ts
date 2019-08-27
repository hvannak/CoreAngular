import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail
  list: PaymentDetail[];

  constructor(private http:HttpClient) { 
    let apiUrl = localStorage.getItem('apiURL');
    if(apiUrl != environment.apiURL && apiUrl != null){
      environment.apiURL = environment.apiURLocal;
    }
  }

  postPaymentDetail(){
    return this.http.post(environment.apiURL + "/PaymentDetail", this.formData)
  }

  PutPaymentDetail(){
    return this.http.put(environment.apiURL + "/PaymentDetail/" + this.formData.PMId , this.formData)
  }
  DeletePaymentDetail(id){
    return this.http.delete(environment.apiURL + "/PaymentDetail/" + id)
  }
  refressList(){
    this.http.get(environment.apiURL + "/PaymentDetail")
        .toPromise()
        .then(res => this.list = res as PaymentDetail[])
  }

}
