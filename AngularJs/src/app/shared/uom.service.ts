import { Injectable } from '@angular/core';
import { Uom } from './uom';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UomService {

  formData:Uom
  list:MatTableDataSource<Uom>;
  constructor(private http:HttpClient) {
    let apiUrl = localStorage.getItem('apiURL');
    if(apiUrl != environment.apiURL && apiUrl != null){
      environment.apiURL = environment.apiURLocal;
    }
   }
  postUomDetail(){
    
    return this.http.post(environment.apiURL + "/UnitOfMeasures", this.formData)
  }

  PutUomDetail(){
    return this.http.put(environment.apiURL + "/UnitOfMeasures/" + this.formData.UomId , this.formData)
  }

  DeleteUomDetail(id){
    return this.http.delete(environment.apiURL + "/UnitOfMeasures/" + id)
  }
  
  getUom(){
    return this.http.get(environment.apiURL + "/UnitOfMeasures").toPromise();
  }

}
