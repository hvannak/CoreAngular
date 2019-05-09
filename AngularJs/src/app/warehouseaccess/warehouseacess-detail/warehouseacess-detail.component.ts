import { Component, OnInit } from '@angular/core';
import { WarehouseaccessService } from 'src/app/shared/warehouseaccess.service';
import { UserService } from 'src/app/shared/user.service';
import { WarehouseService } from 'src/app/shared/warehouse.service';

@Component({
  selector: 'app-warehouseacess-detail',
  templateUrl: './warehouseacess-detail.component.html',
  styleUrls: ['./warehouseacess-detail.component.css']
})
export class WarehouseacessDetailComponent implements OnInit {

  userList;
  warehouseList;
  constructor(private service:WarehouseaccessService,private userService:UserService,private warehouseService:WarehouseService) { }

  ngOnInit() {
    this.getUsers();
    this.getWarehouses();
  }

  getUsers(){
    this.userService.getUsers().then(res => this.userList = res);
  }

  getWarehouses(){
    this.warehouseService.getWarehouse().then(res=> this.warehouseList = res);
  }

  postWarehouseaccess(){
    this.postWarehouseaccess();
  }

  deleteWarehouseaccess(){
    this.deleteWarehouseaccess();
  }
}
