import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { StandardnameService } from 'src/app/shared/standardname.service';
import { ToastrService } from 'ngx-toastr';
import { Standardname } from 'src/app/shared/standardname.model';

@Component({
  selector: 'app-standardname-list',
  templateUrl: './standardname-list.component.html',
  styleUrls: ['./standardname-list.component.css']
})
export class StandardnameListComponent implements OnInit {

  displayedColumns: string[] = ['Standard','Delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public service:StandardnameService,private toastr:ToastrService) { }

  ngOnInit() {
    this.refressList();
  }

  populateForm(pd:Standardname){
    this.service.formData = Object.assign({},pd);
 }

 refressList(){
  this.service.refressList().then(res=> {
    this.service.list = new MatTableDataSource(res as Array<Standardname>);
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
        let index = this.service.list.data.findIndex(x=>x.StandardNameId == PMId);
        this.service.list.data.splice(index,1);
        this.service.list._updateChangeSubscription();
         this.toastr.warning("Deleted successfully","Standard Detail Register");
       },
       err => {
         console.log(err);
       }
     )
   }

  }
}
