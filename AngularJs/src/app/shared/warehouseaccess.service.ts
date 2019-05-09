import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseaccessService {
  constructor(private fb:FormBuilder,private http:HttpClient) { }

  formModel = this.fb.group({
    WarehouseAccessId:[''],
    UserId:['',Validators.required],
    WarehouseId:['',Validators.required],
  });

  getWarehouseaccessList() {
    return this.http.get(environment.apiURL + '/WarehouseAccesses').toPromise();
  }

  getWarehouseaccessByID(id:string):any{
    return this.http.get(environment.apiURL + '/WarehouseAccesses/'+id).toPromise();
  }

  onDelete(id:number){
    return this.http.delete(environment.apiURL + '/WarehouseAccesses/'+id).toPromise();
  }

  onAdd(id:number){
    var body = {
      WarehouseId: this.formModel.value.WarehouseId,
      UserId: this.formModel.value.UserId
    }
    return this.http.post(environment.apiURL + '/WarehouseAccesses', body).toPromise();
  }
}
