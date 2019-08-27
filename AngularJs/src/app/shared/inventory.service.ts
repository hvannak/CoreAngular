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

  constructor(private http:HttpClient) {
    let apiUrl = localStorage.getItem('apiURL');
    if(apiUrl != environment.apiURL && apiUrl != null){
      environment.apiURL = environment.apiURLocal;
    }
   }

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

  getInventoryById(id:number){
    return this.http.get(environment.apiURL + "/Inventorys/" + id).toPromise();
  }

  getInventoryByName(name:string){
    return this.http.get(environment.apiURL + "/Inventorys/Name/" + name).toPromise();
  }

  getInventoryByLast(last:number){
    return this.http.get(environment.apiURL + "/Inventorys/Last/" + last).toPromise();
  }

  getInventoryAnimal(){
    return this.http.get(environment.apiURL + "/Inventorys/Category/ANIMAL").toPromise();
  }

  getInventoryByCategory(category:string){
    return this.http.get(environment.apiURL + "/Inventorys/Category/" + category).toPromise();
  }
}
