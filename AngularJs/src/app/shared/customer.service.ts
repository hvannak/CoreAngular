import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  formData:Customer;
  list:MatTableDataSource<Customer>;
  constructor(private http: HttpClient) { }

  getCustomerList(){
    return this.http.get(environment.apiURL+'/Customers').toPromise();
   }

  getCustomerByName(name:string){
    return this.http.get(environment.apiURL+'/Customers/Name/' + name).toPromise();
  }

  getCustomerById(id:number){
    return this.http.get(environment.apiURL+'/Customers/' + id).toPromise();
  }

  getCustomerByLast(last:number){
    return this.http.get(environment.apiURL+'/Customers/Last/' + last).toPromise();
  }

   postCustomersDetail(){
    return this.http.post(environment.apiURL + "/Customers", this.formData)
  }

  PutCustomersDetail(){
    return this.http.put(environment.apiURL + "/Customers/" + this.formData.CustomerId , this.formData)
  }

  DeleteCustomersDetail(id){
    return this.http.delete(environment.apiURL + "/Customers/" + id)
  }
}
