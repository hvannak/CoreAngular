import { Injectable, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Dailyanimalgrow } from './dailyanimalgrow.model';
import { WarehouseService } from './warehouse.service';

@Injectable({
  providedIn: 'root'
})
export class DailyanimalgrowService {

  warehouseList;
  list:MatTableDataSource<Dailyanimalgrow>;
  constructor(private fb:FormBuilder,private http: HttpClient,private warehouseService:WarehouseService) {
    let apiUrl = localStorage.getItem('apiURL');
    if(apiUrl != environment.apiURL && apiUrl != null){
      environment.apiURL = environment.apiURLocal;
    }
   }

  formModel = this.fb.group({
    DailyGrowId:[''],
    InventoryId:['',Validators.required],
    ProjectId:['',Validators.required],
    WarehouseId:['',Validators.required],
    ProjectName:[''],
    WarehouseName:[''],
    InventoryDesc:[''],
    DateGrow:['',Validators.required],
    Weight:['',Validators.required],
  });

  getDailyGrow(){
    return this.http.get(environment.apiURL + '/DailyAnimalGrows').toPromise();
  }

  getDailyGrowById(Id:number){
    return this.http.get(environment.apiURL + '/DailyAnimalGrows/' + Id).toPromise();
  }

  getDailyGrowWithStandard(projectId:number,standardId:number){
    return this.http.get(environment.apiURL + '/DailyAnimalGrows/viewwithstandard/' + projectId + "/" + standardId).toPromise();
  }

  deleteDailyGrow(id:number){
    return this.http.delete(environment.apiURL + '/DailyAnimalGrows/' + id);
  }

  postDailyGrow(){
    return this.http.post(environment.apiURL + '/DailyAnimalGrows', this.formModel.value);
  }

  putDailyGrow(){
    return this.http.put(environment.apiURL + '/DailyAnimalGrows/' + this.formModel.value.DailyGrowId, this.formModel.value);
  }

  populateForm(pd:Dailyanimalgrow){
    this.warehouseService.getWarehouseByProjectId(pd.ProjectId).then(res => this.warehouseList = res);
    this.formModel.patchValue(Object.assign({},pd));
 }

 onChangeProject(item){
  this.warehouseService.getWarehouseByProjectId(item.target.value).then(res => this.warehouseList = res);
  let text = item.target.options[item.target.options.selectedIndex].text;
  this.formModel.patchValue({
    ProjectName:text
  });
}

}
