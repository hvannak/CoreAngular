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

  constructor() { }

  ngOnInit() {
    
  }

}
