import { Injectable } from '@angular/core';
import { Standardname } from './standardname.model';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StandardnameService {

  formData:Standardname;
  list:MatTableDataSource<Standardname>;
  constructor(private http:HttpClient) { }

  postStandardDetail(){
    return this.http.post(environment.apiURL + "/StandardNames", this.formData)
  }

  PutStandardDetail(){
    return this.http.put(environment.apiURL + "/StandardNames/" + this.formData.StandardNameId , this.formData)
  }

  DeleteStandardDetail(id){
    return this.http.delete(environment.apiURL + "/StandardNames/" + id)
  }

  refressList(){
    return this.http.get(environment.apiURL + "/StandardNames").toPromise();
  }

  getStandard(){
    return this.http.get(environment.apiURL + "/StandardNames").toPromise();
  }
}
