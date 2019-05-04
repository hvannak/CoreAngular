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

  ctlList;
  roleList:Role;
  constructor(public service:RoleService,
    private serviceCtl:RoleCtlService,
    private toastr:ToastrService,private currentRoute: ActivatedRoute,private router: Router) {
     
  } 

  ngOnInit() {
    this.getCtl();
    let roleId = this.currentRoute.snapshot.paramMap.get('id');
    if(roleId == null){
      this.service.formModel.reset();
      this.service.rolesAdded = [];
      this.service.selectedCtl = [];
    }
    else{
      this.service.getRoleByID(roleId).then(res => {
        this.roleList = res;
        this.service.formModel.patchValue({
          Id:this.roleList.Id,
          RoleName:this.roleList.Name,
        });
        if(this.roleList.Access != null){
          this.service.rolesAdded = [];
          this.service.selectedCtl = [];
          var accesslist = JSON.parse(this.roleList.Access);
          this.service.selectedCtl = accesslist;
          for(let i = 0; i < accesslist.length; i++){
            this.service.rolesAdded.push(accesslist[i].Id);
        }
      }
       this.service.formModel.value.Id = roleId;
      });
    }
  }

  onSubmit()
  {
    if(this.service.formModel.value.Id == '' || this.service.formModel.value.Id == null){
      this.postRole();
      console.log('post');
    }
    else{
      console.log('put');
      this.putRole();
    }
    
  }

  postRole(){
    this.service.postRoles().subscribe(
      (res:any) => {
        if(res.Succeeded){
          
          this.toastr.success("New role created","Register Role");
        }
      },
      err =>{
        console.log(err);
      }

    );
  }

  putRole(){
    this.service.putRoles().subscribe(
      (res:any) => {
        if(res.Succeeded){
          
          this.toastr.success("New role updated","Register Role");
        }
      },
      err =>{
        console.log(err);
      }

    );
  }

  getCtl(){
    this.serviceCtl.getTreeList().then(res => this.ctlList = res);
  }

  onDelete(item:any){
    this.service.onDelete(item);
  }

  onAdd(item:any){
    this.service.onAdd(item);
  }
}
