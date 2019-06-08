import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InsitestatusService {

  constructor(private http: HttpClient,private fb:FormBuilder) { }

  formInsiteFilter = this.fb.group({
    ProjectId:['',Validators.required],
    InventoryId:[''],
  });
  
  getInsiteStatusByPWI(projectId:number,warehouseId:number,inventoryId:number):any {
    return this.http.get(environment.apiURL + '/INSiteStatus/Cost/'+projectId+'/'+warehouseId + "/" + inventoryId).toPromise();
  }

  getInsiteStatusByProjectInventory(projectId:number,inventoryId:number):any {
    return this.http.get(environment.apiURL + '/INSiteStatus/Projectstatus/'+projectId+'/' + inventoryId).toPromise();
  }
}
