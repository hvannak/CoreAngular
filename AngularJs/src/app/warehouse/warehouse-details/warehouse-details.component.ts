import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-warehouse-details',
  templateUrl: './warehouse-details.component.html',
  styleUrls: ['./warehouse-details.component.css']
})
export class WarehouseDetailsComponent implements OnInit {

  constructor(public service:WarehouseService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      WarehouseId:0,
      WarehouseName:''
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.WarehouseId == 0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  
  insertRecord(form:NgForm){
    this.service.postWarehousesDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success("Submited successfully","Warehouse Detail Register");
        this.service.refressList();
      },
      err=>{
        console.log(err);
      })
  }

  updateRecord(form:NgForm){
    this.service.PutWarehousesDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.info("Submited successfully","Warehouse Detail Register");
        this.service.refressList();
      },
      err=>{
        console.log(err);
      })
  }

}
