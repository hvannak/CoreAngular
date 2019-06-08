import { Component, OnInit } from '@angular/core';
import { WarehouseaccessService } from 'src/app/shared/warehouseaccess.service';
import { UserService } from 'src/app/shared/user.service';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-warehouseacess-detail',
  templateUrl: './warehouseacess-detail.component.html',
  styleUrls: ['./warehouseacess-detail.component.css']
})
export class WarehouseacessDetailComponent implements OnInit {

  userList;
  warehouseList;
  userwarehouseChange=[];
  warehouseId;
  constructor(private service:WarehouseaccessService,private userService:UserService,
    private toastr:ToastrService,private warehouseService:WarehouseService) { }

  ngOnInit() {
    this.getUsers();
    this.getWarehouses();
  }

  getUsers(){
    this.userService.getUsers().then(res => this.userList = res);
  }

  getWarehouses(){
    this.warehouseService.getAllWarehouse().then(res=> this.warehouseList = res);
  }

  onAdd(item){
    let index = this.userwarehouseChange.findIndex( record => record.UserName === item.UserName );
    if(index <= -1){
      this.userwarehouseChange.push({UserName:item.UserName});
      this.service.onAdd(item).subscribe(   
        res=>{
          this.toastr.success("New role created","Register WarehouseAccess");
        }
      );
    }
  }

  onDelete(item){
    if (confirm('Are you sure to delete this record?')) {
      this.service.onDelete(item.Id,this.warehouseId).then(res => {
        let index = this.userwarehouseChange.findIndex( record => record.UserName === item.UserName );
        if(index > -1){
          this.userwarehouseChange.splice(index, 1);
        }
        this.toastr.warning("Deleted Successfully", "Warehouse Access");
      });
    }
  }

  onChange(deviceValue){
    if(this.service.userAdded != null){
      this.service.userAdded=[];
    }
    this.warehouseId = deviceValue;
    this.service.getWarehouseaccessByID(deviceValue).then(res=> this.userwarehouseChange=res as []); 
  }
}
