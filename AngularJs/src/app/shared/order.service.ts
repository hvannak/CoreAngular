import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData:Order;
  orderItems: OrderItem[];
  constructor(private http: HttpClient) { 
    let apiUrl = localStorage.getItem('apiURL');
    if(apiUrl != environment.apiURL && apiUrl != null){
      environment.apiURL = environment.apiURLocal;
    }
  }

  saveOrUpdateOrder() {
    var body = {
      ...this.formData,
      OrderLines: this.orderItems
    };
    return this.http.post(environment.apiURL + '/Orders', body);
  }

  postOrders(){
    var body = {
      ...this.formData,
      OrderLines: this.orderItems
    };
    return this.http.post(environment.apiURL + '/Orders', body);
  }

  putOrders(){
    var body = {
      ...this.formData,
      OrderLines: this.orderItems
    };
    return this.http.put(environment.apiURL + '/Orders/' + this.formData.OrderId, body);
  }

  getOrderList() {
    return this.http.get(environment.apiURL + '/Orders').toPromise();
  }

  getOrderByID(id:number):any {
    return this.http.get(environment.apiURL + '/Orders/'+id).toPromise();
  }

  deleteOrder(id:number) {
    return this.http.delete(environment.apiURL + '/Orders/'+id).toPromise();
  }
}

