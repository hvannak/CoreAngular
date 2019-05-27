import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Standard } from './standard.model';
import { environment } from 'src/environments/environment';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class StandardService {

  formData:Standard;
  displayedColumns: string[] = ['StandardName','NumberOfDay', 'ResultOfDay','UOM','Delete'];
  list:MatTableDataSource<Standard>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private http:HttpClient) { }

  postStandardDetail(){
    return this.http.post(environment.apiURL + "/Standards", this.formData)
  }

  PutStandardDetail(){
    return this.http.put(environment.apiURL + "/Standards/" + this.formData.StandardKey , this.formData)
  }

  DeleteStandardDetail(id){
    return this.http.delete(environment.apiURL + "/Standards/" + id)
  }

  refressList(){
    this.http.get(environment.apiURL + "/Standards").toPromise().then(res=> {
      this.list = new MatTableDataSource(res as Array<Standard>);
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
    });
  }

  getStandard(){
    return this.http.get(environment.apiURL + "/Standards").toPromise();
  }

  applyFilter(filterValue: string) {
    this.list.filter = filterValue.trim().toLowerCase();
  
    if (this.list.paginator) {
      this.list.paginator.firstPage();
    }
  }
}
