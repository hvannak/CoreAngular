import { Injectable } from '@angular/core';
import { FormBuilder,Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { RoleService } from './role.service';
import { element } from '@angular/core/src/render3';
import { Role } from './role.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  rolesAdded = [];
  constructor(private roleService:RoleService,private fb:FormBuilder,private http: HttpClient) {
    
   }

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

   userroleModel = this.fb.group({
    UserId: [''],
    UserName: ['', Validators.required],
    Roles: ['']
  });


  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  
  onDelete(item:any){
    var index = this.rolesAdded.indexOf(item.Name);
    if (index > -1) {
      this.rolesAdded.splice(index, 1);
    }
  }

  onAdd(item:any):void{
    var index = this.rolesAdded.indexOf(item.Name);
    if(index <= -1){
      this.rolesAdded.push(item.Name);
    }
  }

  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(environment.apiURL + '/ApplicationUser/Register', body);
  }

  putUser(){
    var body = {
      UserId: this.userroleModel.value.UserId,
      UserName: this.userroleModel.value.UserName,
      Roles: this.userroleModel.value.Roles
    };
    return this.http.put(environment.apiURL + '/Access/' + this.userroleModel.value.UserId,body);
  }

  login(formData) {
    return this.http.post(environment.apiURL + '/ApplicationUser/Login', formData);
  }

  getUserProfile() {
    return this.http.get(environment.apiURL + '/UserProfile');
  }

  getUserRoles(){
    return this.http.get(environment.apiURL + '/Access').toPromise();
  }

  deleteUser(id:string){
    return this.http.delete(environment.apiURL + '/Access/' + id).toPromise();
  }

}

