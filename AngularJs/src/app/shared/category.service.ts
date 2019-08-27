import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  formData:Category;
  list:MatTableDataSource<Category>;
  constructor(private http:HttpClient) { 
    let apiUrl = localStorage.getItem('apiURL');
    if(apiUrl != environment.apiURL && apiUrl != null){
      environment.apiURL = environment.apiURLocal;
    }
  }

  postCategoryDetail(){
    return this.http.post(environment.apiURL + "/Categories", this.formData)
  }

  PutCategoryDetail(){
    return this.http.put(environment.apiURL + "/Categories/" + this.formData.CategoryId , this.formData)
  }
  DeleteCategoryDetail(id){
    return this.http.delete(environment.apiURL + "/Categories/" + id)
  }

  getCategory(){
    return this.http.get(environment.apiURL + "/Categories").toPromise();
  }
}
