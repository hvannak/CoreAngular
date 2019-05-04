import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/project.model';
import { ProjectService } from 'src/app/shared/project.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(public service:ProjectService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refressList();
  }

  populateForm(pd:Project){
    this.service.formData = Object.assign({},pd);
 }

 onDelete(PMId){
   if(confirm('Are you sure to delete this record?')){
     this.service.DeleteProjectsDetail(PMId).subscribe(
       res => {
         this.service.refressList();
         this.toastr.warning("Deleted successfully","Project Detail Register");
       },
       err => {
         console.log(err);
       }
     )
   }
  }

}
