import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Todoitemnode } from './todoitemnode.model';

@Injectable({
  providedIn: 'root'
})
export class RoleCtlService {

  constructor(private http: HttpClient) { 

  }

  getTreeList(){
    return this.http.get(environment.apiURL+'/CtlDiscovery').toPromise();
   }
}



