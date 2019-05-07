import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  formData:Category;
  list:Category[]
  constructor(private http:HttpClient) { }

  postCategoryDetail(){
    return this.http.post(environment.apiURL + "/Categories", this.formData)
  }

  PutCategoryDetail(){
    return this.http.put(environment.apiURL + "/Categories/" + this.formData.CategoryId , this.formData)
  }
  DeleteCategoryDetail(id){
    return this.http.delete(environment.apiURL + "/Categories/" + id)
  }
  refressList(){
    this.http.get(environment.apiURL + "/Categories")
        .toPromise()
        .then(res => this.list = res as Category[])
  }

  getCategory(){
    return this.http.get(environment.apiURL + "/Categories").toPromise();
  }
}
