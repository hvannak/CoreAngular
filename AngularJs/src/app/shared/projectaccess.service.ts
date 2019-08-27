import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectaccessService {
  userAdded=[];
  constructor(private fb:FormBuilder,private http:HttpClient) { 
    let apiUrl = localStorage.getItem('apiURL');
    if(apiUrl != environment.apiURL && apiUrl != null){
      environment.apiURL = environment.apiURLocal;
    }
  }

  formModel = this.fb.group({
    ProjectAccessId:[''],
    UserId:['',Validators.required],
    ProjectId:['',Validators.required],
  });

  getProjectaccessList() {
    return this.http.get(environment.apiURL + '/ProjectAccesses').toPromise();
  }

  getProjectaccessByID(deviceValue){
    return this.http.get(environment.apiURL + '/ProjectAccesses/'+ deviceValue).toPromise()
  }

  onDelete(id:number,projectId:number){     
    return this.http.delete(environment.apiURL + '/ProjectAccesses/'+ id + "/" + projectId ).toPromise();   
  }

  onAdd(item){
    var body = {
      ProjectId: this.formModel.value.ProjectId,
      UserId: item.Id
    }
    return this.http.post(environment.apiURL + '/ProjectAccesses', body);
  }
}
