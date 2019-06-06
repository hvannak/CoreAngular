import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Project } from './project.model';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  formData:Project
  list:MatTableDataSource<Project>;

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
  getAllProject(){
    return this.http.get(environment.apiURL + "/Projects").toPromise();
  }
  getActiveProject(){
   return this.http.get(environment.apiURL + "/Projects/ProjectStatus/Active").toPromise();
  }
}
