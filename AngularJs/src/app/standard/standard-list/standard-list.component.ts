import { Component, OnInit, ViewChild } from '@angular/core';
import { StandardService } from 'src/app/shared/standard.service';
import { ToastrService } from 'ngx-toastr';
import { Standard } from 'src/app/shared/standard.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-standard-list',
  templateUrl: './standard-list.component.html',
  styleUrls: ['./standard-list.component.css']
})
export class StandardListComponent implements OnInit {

  displayedColumns: string[] = ['StandardName','NumberOfDay', 'ResultOfDay','Delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public service:StandardService,private toastr:ToastrService) { }

  ngOnInit() {
    this.refressList();
  }

  populateForm(pd:Standard){
    this.service.formData = Object.assign({},pd);
 }

 refressList(){
  this.service.refressList().then(res=> {
    this.service.list = new MatTableDataSource(res as Array<Standard>);
    this.service.list.paginator = this.paginator;
    this.service.list.sort = this.sort;
  });
}

applyFilter(filterValue: string) {
  this.service.list.filter = filterValue.trim().toLowerCase();

  if (this.service.list.paginator) {
    this.service.list.paginator.firstPage();
  }
}

 onDelete(PMId){
   if(confirm('Are you sure to delete this record?')){
     this.service.DeleteStandardDetail(PMId).subscribe(
       res => {
        let index = this.service.list.data.findIndex(x=>x.StandardKey == PMId);
        this.service.list.data.splice(index,1);
        this.service.list._updateChangeSubscription();
         this.service.refressList();
         this.toastr.warning("Deleted successfully","Standard Detail Register");
       },
       err => {
         console.log(err);
       }
     )
   }

  }
}
