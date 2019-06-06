import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Inventory } from './inventory.model';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  formData:Inventory
  list:MatTableDataSource<Inventory>;

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
  
  getInventory(){
    return this.http.get(environment.apiURL + "/Inventorys").toPromise();
  }

  getInventoryAnimal(){
    return this.http.get(environment.apiURL + "/Inventorys/Category/ANIMAL").toPromise();
  }

}
