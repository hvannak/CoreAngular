import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { RoleService } from 'src/app/shared/role.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UsereditComponent } from 'src/app/user/useredit/useredit.component';

@Component({
  selector: 'app-userrolelist',
  templateUrl: './userrolelist.component.html',
  styleUrls: ['./userrolelist.component.css']
})
export class UserrolelistComponent implements OnInit {

  userroleList;
  constructor(private service:UserService,private router: Router,
    private toastr:ToastrService,private dialog: MatDialog) { }

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
    this.service.userroleModel.get('UserName').disable();
  }

  onUserEdit(id){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { id };
    this.dialog.open(UsereditComponent, dialogConfig).afterClosed().subscribe(res => {
      console.log('done');
    });
  }

  refressList(){
    this.service.getUserRoles().then(res => this.userroleList = res);
  }

  onUserDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteUser(id).then(res => {
        this.refressList();
        this.toastr.warning("Deleted Successfully", "User Roles.");
      });
    }
  }
}
