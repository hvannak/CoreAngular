import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { File } from './file.model';
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
    formFile:['',Validators.required]
  })

  postFile(){ 
    console.log('in');
    console.log(this.formModel.value);
    return this.http.post(environment.apiURL + "/ImagesFiles", this.formModel.value)
  }
}
