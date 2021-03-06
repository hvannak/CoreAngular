import { Injectable } from '@angular/core';
import { Warehouse } from './warehouse.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  formData:Warehouse;
  list:MatTableDataSource<Warehouse>;
  constructor(private http:HttpClient) { 
    let apiUrl = localStorage.getItem('apiURL');
    if(apiUrl != environment.apiURL && apiUrl != null){
      environment.apiURL = environment.apiURLocal;
    }
  }

  postWarehousesDetail(){
    return this.http.post(environment.apiURL + "/Warehouses", this.formData)
  }

  PutWarehousesDetail(){
    return this.http.put(environment.apiURL + "/Warehouses/" + this.formData.WarehouseId , this.formData)
  }
  DeleteWarehousesDetail(id){
    return this.http.delete(environment.apiURL + "/Warehouses/" + id)
  }

  getWarehouse(){
    return this.http.get(environment.apiURL + "/Warehouses").toPromise();
    
  }

  getWarehouseById(id:number){
    return this.http.get(environment.apiURL + "/Warehouses/" + id).toPromise();
    
  }

  getAllWarehouse(){
    return this.http.get(environment.apiURL + "/Warehouses/All").toPromise();
    
  }

  getWarehouseByProjectId(item){
    return this.http.get(environment.apiURL + "/Warehouses/ProjectId/" + item).toPromise();
  }
  
}
