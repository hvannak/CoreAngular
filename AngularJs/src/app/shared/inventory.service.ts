import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Inventory } from './inventory.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  formData:Inventory
  list: Inventory[];

  constructor(private http:HttpClient) { }

  postInventoryDetail(){
    
    return this.http.post(environment.apiURL + "/Inventorys", this.formData)
  }

  PutInventoryDetail(){
    return this.http.put(environment.apiURL + "/Inventorys/" + this.formData.InventoryId , this.formData)
  }
  DeleteInventoryDetail(id){
    return this.http.delete(environment.apiURL + "/Inventorys/" + id)
  }
  refressList(){
    this.http.get(environment.apiURL + "/Inventorys")
        .toPromise()
        .then(res => this.list = res as Inventory[])
  }
  
}
