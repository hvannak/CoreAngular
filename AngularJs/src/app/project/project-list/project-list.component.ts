import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/shared/project.model';
import { ProjectService } from 'src/app/shared/project.service';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  displayedColumns: string[] = ['ProjectName','StartDate','EndDate','WarehouseName','Status','Delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public service:ProjectService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getAllProject().then(res=> {
      this.service.list = new MatTableDataSource(res as Array<Project>);
      this.service.list.paginator = this.paginator;
      this.service.list.sort = this.sort;
    });
  }

  populateForm(pd:Project){
    this.service.formData = Object.assign({},pd);
 }

 applyFilter(filterValue: string) {
  this.service.list.filter = filterValue.trim().toLowerCase();

  if (this.service.list.paginator) {
    this.service.list.paginator.firstPage();
  }
}

 onDelete(PMId){
   if(confirm('Are you sure to delete this record?')){
     this.service.DeleteProjectsDetail(PMId).subscribe(
       res => {
        let index = this.service.list.data.findIndex(x=>x.ProjectId == PMId);
        this.service.list.data.splice(index,1);
        this.service.list._updateChangeSubscription();
         this.toastr.warning("Deleted successfully","Project Detail Register");
       },
       err => {
         console.log(err);
       }
     )
   }
  }

}
