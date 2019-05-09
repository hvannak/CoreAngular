import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseaccessService {
  userAdded=[];
  constructor(private fb:FormBuilder,private http:HttpClient) { }

  formModel = this.fb.group({
    WarehouseAccessId:[''],
    UserId:['',Validators.required],
    WarehouseId:['',Validators.required],
  });

  getWarehouseaccessList() {
    return this.http.get(environment.apiURL + '/WarehouseAccesses').toPromise();
  }

  getWarehouseaccessByID(deviceValue){
    return this.http.get(environment.apiURL + '/WarehouseAccesses/'+ deviceValue).toPromise()
  }

  onDelete(id:number,warhouseId:number){     
    console.log(environment.apiURL + '/WarehouseAccesses/'+ id + "/" + warhouseId);
    return this.http.delete(environment.apiURL + '/WarehouseAccesses/'+ id + "/" + warhouseId ).toPromise();   
  }

  onAdd(item){
    var body = {
      WarehouseId: this.formModel.value.WarehouseId,
      UserId: item.Id
    }
    return this.http.post(environment.apiURL + '/WarehouseAccesses', body);
  }
}
