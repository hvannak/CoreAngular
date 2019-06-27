import { Component, OnInit, ViewChild } from '@angular/core';
import { RoleService } from 'src/app/shared/role.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Role } from 'src/app/shared/role.model';

@Component({
  selector: 'app-role-ctl',
  templateUrl: './role-ctl.component.html',
  styleUrls: ['./role-ctl.component.css']
})
export class RoleCtlComponent implements OnInit {

  displayedColumns: string[] = ['Name','Delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public service: RoleService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getRolesList().then(res => {
      this.service.roleList = new MatTableDataSource(res as Array<Role>);
      this.service.roleList.paginator = this.paginator;
      this.service.roleList.sort = this.sort;
    })
  }

  openForEdit(item) {
    this.service.formModel.setValue({
      Id:item.Id,
      RoleName:item.Name,
      SelectedControllers:''
    });
  }

  applyFilter(filterValue: string) {
    this.service.roleList.filter = filterValue.trim().toLowerCase();
  
    if (this.service.roleList.paginator) {
      this.service.roleList.paginator.firstPage();
    }
  }

  onRoleDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteRole(id).then(res => {
        let index = this.service.roleList.data.findIndex(x=>x.Id == id);
        this.service.roleList.data.splice(index,1);
        this.service.roleList._updateChangeSubscription();
        this.toastr.warning("Deleted Successfully", "Restaurent App.");
      });
    }
  }

}
