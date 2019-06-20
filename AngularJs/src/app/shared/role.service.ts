import { Injectable } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material';
import { Role } from './role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  roleList:MatTableDataSource<Role>;
  constructor(private fb:FormBuilder,private http:HttpClient) { }

  formModel = this.fb.group({
    Id:[''],
    RoleName:['',Validators.required],
    SelectedControllers:[''],
  });

  postRoles(){
    var body = {
      RoleName: this.formModel.value.RoleName,
      SelectedControllers: ''
    }
    return this.http.post(environment.apiURL + '/ApplicationRole', body);
  }

  putRoles(){
    var body = {
      Id:this.formModel.value.Id,
      RoleName: this.formModel.value.RoleName,
      SelectedControllers: ''
    }
    return this.http.put(environment.apiURL + '/ApplicationRole/' + this.formModel.value.Id ,body);
  }

  getRolesList() {
    return this.http.get(environment.apiURL + '/ApplicationRole').toPromise();
  }

  getRoleByID(id:string):any{
    return this.http.get(environment.apiURL + '/ApplicationRole/'+id).toPromise();
  }

  deleteRole(id:string) {
    return this.http.delete(environment.apiURL + '/ApplicationRole/'+id).toPromise();
  }

  onPutRoles(controllerAdded){
    var body = {
      Id:this.formModel.value.Id,
      RoleName: this.formModel.value.RoleName,
      SelectedControllers:controllerAdded
    }
    return this.http.put(environment.apiURL + '/ApplicationRole/' + this.formModel.value.Id ,body);
  }


}
