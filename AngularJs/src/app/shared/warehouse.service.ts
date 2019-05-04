import { Injectable } from '@angular/core';
import { Warehouse } from './warehouse.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  formData:Warehouse;
  list:Warehouse[]
  constructor(private http:HttpClient) { }

  postWarehousesDetail(){
    return this.http.post(environment.apiURL + "/Warehouses", this.formData)
  }

  PutWarehousesDetail(){
    return this.http.put(environment.apiURL + "/Warehouses/" + this.formData.WarehouseId , this.formData)
  }
  DeleteWarehousesDetail(id){
    return this.http.delete(environment.apiURL + "/Warehouses/" + id)
  }
  refressList(){
    this.http.get(environment.apiURL + "/Warehouses")
        .toPromise()
        .then(res => this.list = res as Warehouse[])
  }

  getWarehouse(){
    return this.http.get(environment.apiURL + "/Warehouses").toPromise();
  }
  
}
