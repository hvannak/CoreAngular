import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient,private fb:FormBuilder) { }

  formModel = this.fb.group({
    FileId:[''],
    Caption:['',Validators.required],
    ModuleId:[''],
    OperationId:[''],
    StoreFile:['']
  })

  postFile(){ 
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'multipart/form-data'
    //   })
    // };
    return this.http.post(environment.apiURL + "/ImagesFiles", this.formModel.value);
  }

  getFile(id:number,module:string){
    return this.http.get(environment.apiURL + "/ImagesFiles/FileByModule/" + id + "/" + module ).toPromise();
  }

  deleteFile(id){
    return this.http.delete(environment.apiURL + "/ImagesFiles/" + id)
  }
}
