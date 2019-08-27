import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Standard } from './standard.model';
import { environment } from 'src/environments/environment';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class StandardService {

  formData:Standard;
  list:MatTableDataSource<Standard>;
  constructor(private http:HttpClient) { 
    let apiUrl = localStorage.getItem('apiURL');
    if(apiUrl != environment.apiURL && apiUrl != null){
      environment.apiURL = environment.apiURLocal;
    }
  }

  postStandardDetail(){
    return this.http.post(environment.apiURL + "/Standards", this.formData)
  }

  PutStandardDetail(){
    return this.http.put(environment.apiURL + "/Standards/" + this.formData.StandardKey , this.formData)
  }

  DeleteStandardDetail(id){
    return this.http.delete(environment.apiURL + "/Standards/" + id)
  }

  refressList(){
    return this.http.get(environment.apiURL + "/Standards").toPromise();
  }

  getStandard(){
    return this.http.get(environment.apiURL + "/Standards").toPromise();
  }

}
