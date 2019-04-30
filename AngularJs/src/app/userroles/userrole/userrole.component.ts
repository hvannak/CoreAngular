import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/shared/role.service';
import { Role } from 'src/app/shared/role.model';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css']
})
export class UserroleComponent implements OnInit {

  rolesList: Role[];
  constructor(public service:UserService,private router: Router,
    private toastr:ToastrService,private roleService:RoleService) { }

  ngOnInit() {
    this.onGetRole();
  }

  onSubmit(){
    this.service.userroleModel.value.Roles = this.service.rolesAdded;
    this.service.putUser().subscribe(res => {
      this.service.userroleModel.reset();
      this.toastr.success("Submitted Successfully","User Roles");
    })
  }
  
  onGetRole(){
    this.roleService.getRolesList().then(res => this.rolesList  = res as Role[]);;
    
  }

  onDelete(item:any){
    this.service.onDelete(item);
  }

  onAdd(item:any):void{
    this.service.onAdd(item);
  }
  
}

