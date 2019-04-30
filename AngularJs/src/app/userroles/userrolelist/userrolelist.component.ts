import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { RoleService } from 'src/app/shared/role.service';

@Component({
  selector: 'app-userrolelist',
  templateUrl: './userrolelist.component.html',
  styleUrls: ['./userrolelist.component.css']
})
export class UserrolelistComponent implements OnInit {

  userroleList;
  constructor(private service:UserService,private router: Router,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.refressList();
  }

  populateForm(item){
    this.service.userroleModel.setValue({
      UserId:item.UserId,
      UserName:item.UserName,
      Roles:item.Roles
    });
    this.service.rolesAdded = item.Roles;
    console.log(this.service.rolesAdded);
  }



  refressList(){
    this.service.getUserRoles().then(res => this.userroleList = res);
  }

  onUserDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteUser(id).then(res => {
        this.refressList();
        this.toastr.warning("Deleted Successfully", "Restaurent App.");
      });
    }
  }
}
