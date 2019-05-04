import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  formData:Project
  list: Project[];

  constructor(private http:HttpClient) { }

  postProjectsDetail(){
    
    return this.http.post(environment.apiURL + "/Projects", this.formData)
  }

  PutProjectsDetail(){
    return this.http.put(environment.apiURL + "/Projects/" + this.formData.ProjectId , this.formData)
  }
  DeleteProjectsDetail(id){
    return this.http.delete(environment.apiURL + "/Projects/" + id)
  }
  refressList(){
    this.http.get(environment.apiURL + "/Projects")
        .toPromise()
        .then(res => this.list = res as Project[])
  }
}
