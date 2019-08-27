import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) {
    let apiUrl = localStorage.getItem('apiURL');
    if(apiUrl != environment.apiURL && apiUrl != null){
      environment.apiURL = environment.apiURLocal;
    }
   }

  getItemList(){
    return this.http.get(environment.apiURL+'/Inventorys').toPromise();
   }
}
