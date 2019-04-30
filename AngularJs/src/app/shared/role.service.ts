import { Injectable } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  rolesAdded = [];
  selectedCtl = [];
  constructor(private fb:FormBuilder,private http:HttpClient) { }

  formModel = this.fb.group({
    Id:[''],
    RoleName:['',Validators.required],
    SelectedControllers:[''],
  });

  postRoles(){
    var body = {
      RoleName: this.formModel.value.RoleName,
      SelectedControllers: this.selectedCtl
    }
    console.log(this.selectedCtl);
    return this.http.post(environment.apiURL + '/ApplicationRole', body);
  }

  putRoles(){
    var body = {
      Id:this.formModel.value.Id,
      RoleName: this.formModel.value.RoleName,
      SelectedControllers: this.selectedCtl
    }
    return this.http.put(environment.apiURL + '/ApplicationRole/' + this.formModel.value.Id ,body);
  }

  getRolesList() {
    return this.http.get(environment.apiURL + '/ApplicationRole').toPromise();
  }

  getRoleByID(id:string):any{
    return this.http.get(environment.apiURL + '/ApplicationRole/'+id).toPromise();
  }

  deleteRole(id:number) {
    return this.http.delete(environment.apiURL + '/ApplicationRole/'+id).toPromise();
  }

  onDelete(item:any){
    var index = this.rolesAdded.indexOf(item.Id);
    if (index > -1) {
      this.rolesAdded.splice(index, 1);
      var indexctl = this.selectedCtl.indexOf(item);
      this.selectedCtl.splice(indexctl,1);
    }
  }

  onAdd(item:any):void{
    var index = this.rolesAdded.indexOf(item.Id);
    if(index <= -1){
        this.rolesAdded.push(item.Id);
        this.selectedCtl.push(item);
    }

  }
}
