import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/shared/role.service';
import { ToastrService } from 'ngx-toastr';
import { RoleCtlService } from 'src/app/shared/role-ctl.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/shared/role.model';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(public service:RoleService,
    private toastr:ToastrService) {
     
  } 

  ngOnInit() {
    this.service.formModel.patchValue({
      Id: '0'
    });
  }

  onSubmit()
  {
    if(this.service.formModel.value.Id == '0'){
      this.postRole();
    }
    else{
      this.putRole();
    }
    
  }

  postRole(){
    this.service.postRoles().subscribe(
      (res:any) => {
        if(res.Succeeded){   
           
          this.service.roleList.data.push({
            Id:res.Id,
            Name:this.service.formModel.value.RoleName,
            Access:this.service.formModel.value.SelectedControllers
          });
          this.service.roleList._updateChangeSubscription();   
          this.service.formModel.reset();
          this.service.formModel.patchValue({
            Id: '0'
          });
          this.toastr.success("New role created","Register Role");
        }
      },
      err =>{
        console.log(err);
      });
  }

  putRole(){
    this.service.putRoles().subscribe(
      (res:any) => {
        if(res.Succeeded){   
          let index = this.service.roleList.data.findIndex(x=>x.Id == this.service.formModel.value.Id);
          this.service.roleList.data[index].Id = this.service.formModel.value.Id;
          this.service.roleList.data[index].Name = this.service.formModel.value.RoleName;
          this.service.roleList.data[index].Access = this.service.formModel.value.SelectedControllers;
          this.service.roleList._updateChangeSubscription();   
          this.service.formModel.reset();
          this.service.formModel.patchValue({
            Id: '0'
          });
          this.toastr.success("New role updated","Register Role");
        }
      },
      err =>{
        console.log(err);
      }

    );
  }

}
