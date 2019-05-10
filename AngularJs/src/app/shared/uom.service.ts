import { Injectable } from '@angular/core';
import { Uom } from './uom';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UomService {

  formData:Uom
  list: Uom[];
  constructor(private http:HttpClient) { }
  postUomDetail(){
    
    return this.http.post(environment.apiURL + "/UnitOfMeasures", this.formData)
  }

  PutUomDetail(){
    return this.http.put(environment.apiURL + "/UnitOfMeasures/" + this.formData.UomId , this.formData)
  }

  DeleteUomDetail(id){
    return this.http.delete(environment.apiURL + "/UnitOfMeasures/" + id)
  }
  refressList(){
    this.http.get(environment.apiURL + "/UnitOfMeasures")
        .toPromise()
        .then(res => this.list = res as Uom[])
  }

  getUom(){
    return this.http.get(environment.apiURL + "/UnitOfMeasures")
        .toPromise();
  }

}
