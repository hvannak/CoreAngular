import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';
import { MatTableDataSource } from '@angular/material';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  formData:Customer;
  list:MatTableDataSource<Customer>;
  constructor(private http: HttpClient) { 
    let apiUrl = localStorage.getItem('apiURL');
    if(apiUrl != environment.apiURL && apiUrl != null){
      environment.apiURL = environment.apiURLocal;
    }
    console.log(environment.apiURL);
  }

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
    return this.http.post(environment.apiURL + "/Customers", this.formData);
  }

  PutCustomersDetail(){
    return this.http.put(environment.apiURL + "/Customers/" + this.formData.CustomerId , this.formData)
  }

  syncCustomers(){
    return this.http.get(environment.apiURL + "/Customers/Sync").toPromise();
  }

  DeleteCustomersDetail(id){
    return this.http.delete(environment.apiURL + "/Customers/" + id)
  }
}
