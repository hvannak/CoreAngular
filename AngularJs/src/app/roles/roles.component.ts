import { Component, OnInit } from '@angular/core';
import { RoleService } from '../shared/role.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roleList;
  constructor(private service: RoleService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.service.getRolesList().then(res => this.roleList = res);
  }

  openForEdit(id: number) {
    this.router.navigate(['/role/edit/' + id]);
  }

  onRoleDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteRole(id).then(res => {
        this.refreshList();
        this.toastr.warning("Deleted Successfully", "Restaurent App.");
      });
    }
  }



}
