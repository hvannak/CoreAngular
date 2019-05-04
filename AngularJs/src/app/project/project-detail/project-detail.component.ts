import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { WarehouseService } from 'src/app/shared/warehouse.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  warehouseList;
  constructor(public service:ProjectService,private warehouseService:WarehouseService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.getWarehouse();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      ProjectId:0,
      ProjectName:'',
      StartDate:new Date(),
      EndDate:new Date(),
      WarehouseId:0,
      Status:''
    }
  }

  getWarehouse(){
    this.warehouseService.getWarehouse().then(res => this.warehouseList = res);
  }

  onSubmit(form:NgForm){
    if(this.service.formData.ProjectId == 0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  
  insertRecord(form:NgForm){
    this.service.postProjectsDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success("Submited successfully","Project Detail Register");
        this.service.refressList();
      },
      err=>{
        console.log(err);
      })
  }

  updateRecord(form:NgForm){
    this.service.PutProjectsDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.info("Submited successfully","Project Detail Register");
        this.service.refressList();
      },
      err=>{
        console.log(err);
      })
  }

}
