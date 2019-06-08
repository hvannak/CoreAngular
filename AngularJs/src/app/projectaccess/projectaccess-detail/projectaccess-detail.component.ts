import { Component, OnInit } from '@angular/core';
import { ProjectaccessService } from 'src/app/shared/projectaccess.service';
import { UserService } from 'src/app/shared/user.service';
import { ProjectService } from 'src/app/shared/project.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projectaccess-detail',
  templateUrl: './projectaccess-detail.component.html',
  styleUrls: ['./projectaccess-detail.component.css']
})
export class ProjectaccessDetailComponent implements OnInit {

  userList;
  projectList;
  userprojectChange=[];
  projectId;
  constructor(private service:ProjectaccessService,private userService:UserService,
    private toastr:ToastrService,private projectService:ProjectService) { }

  ngOnInit() {
    this.getUsers();
    this.getProject();
  }

  getUsers(){
    this.userService.getUsers().then(res => this.userList = res);
  }

  getProject(){
    this.projectService.getAllAccessProject().then(res=> this.projectList = res);
  }

  onAdd(item){
    let index = this.userprojectChange.findIndex( record => record.UserName === item.UserName );
    if(index <= -1){
      this.userprojectChange.push({UserName:item.UserName});
      this.service.onAdd(item).subscribe(   
        res=>{
          this.toastr.success("Project Access created","Project Access");
        }
      );
    }
  }

  onDelete(item){
    if (confirm('Are you sure to delete this record?')) {
      this.service.onDelete(item.Id,this.projectId).then(res => {
        let index = this.userprojectChange.findIndex( record => record.UserName === item.UserName );
        if(index > -1){
          this.userprojectChange.splice(index, 1);
        }
        this.toastr.warning("Deleted Successfully", "Project Access");
      });
    }
  }

  onChange(deviceValue){
    if(this.service.userAdded != null){
      this.service.userAdded=[];
    }
    this.projectId = deviceValue;
    this.service.getProjectaccessByID(deviceValue).then(res=> this.userprojectChange=res as []); 
  }
}
