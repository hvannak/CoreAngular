import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsitestatusService {

  constructor(private http: HttpClient) { }

  getInsiteStatusByPWI(projectId:number,warehouseId:number,inventoryId:number):any {
    return this.http.get(environment.apiURL + '/INSiteStatus/Cost/'+projectId+'/'+warehouseId + "/" + inventoryId).toPromise();
  }
}
