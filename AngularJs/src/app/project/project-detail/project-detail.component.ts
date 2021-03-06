import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import * as _moment from 'moment';
import * as _momentzone from 'moment-timezone';
import {default as _rollupMoment} from 'moment';
import { MAT_DATEPICKER_VALUE_ACCESSOR, MatDatepickerInputEvent } from '@angular/material';
import { Project } from 'src/app/shared/project.model';
const moment = _rollupMoment || _moment;

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
      // StartDate:new Date(),
      // EndDate:new Date(),
      StartDate:'',
      EndDate:'',
      WarehouseId:0,
      WarehouseName:'',
      Status:''
    }
  }

  onChangeWarehouse(item){
    let text = item.target.options[item.target.options.selectedIndex].text;
    this.service.formData.WarehouseName = text;
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
    // this.service.formData.StartDate = this.getLocalDate(this.service.formData.StartDate.toLocaleDateString());
    // this.service.formData.EndDate = this.getLocalDate(this.service.formData.EndDate.toLocaleDateString());
    // console.log(this.service.formData.EndDate.toLocaleString());

    this.service.postProjectsDetail().subscribe(
      res=>{
        this.service.list.data.push(res as Project);
        this.service.list._updateChangeSubscription();
        this.resetForm(form);
        this.toastr.success("Submited successfully","Project Detail Register");
      },
      err=>{
        console.log(err);
      })
  }

  updateRecord(form:NgForm){
    // if(this.service.formData.StartDate.toLocaleString().indexOf('/') !== -1){
    //   this.service.formData.StartDate = this.getLocalDate(this.service.formData.StartDate.toLocaleDateString());
    // }
    // if(this.service.formData.EndDate.toLocaleString().indexOf('/') !== -1){
    //   this.service.formData.EndDate = this.getLocalDate(this.service.formData.EndDate.toLocaleDateString());
    // }

    this.service.PutProjectsDetail().subscribe(
      res=>{
        let index = this.service.list.data.findIndex(x=>x.ProjectId == this.service.formData.ProjectId);
        this.service.list.data[index].ProjectId = this.service.formData.ProjectId;
        this.service.list.data[index].ProjectName = this.service.formData.ProjectName;
        this.service.list.data[index].StartDate = this.service.formData.StartDate;
        this.service.list.data[index].EndDate = this.service.formData.EndDate;
        this.service.list.data[index].Status = this.service.formData.Status;
        this.service.list.data[index].WarehouseId = this.service.formData.WarehouseId;
        this.service.list.data[index].WarehouseName = this.service.formData.WarehouseName;
        this.service.list._updateChangeSubscription();
        this.resetForm(form);
        this.toastr.info("Submited successfully","Project Detail Register");
      },
      err=>{
        console.log(err);
      })
  }

  getLocalDate(item:string){
    var ldate = item.split('/');
    var date = ldate[2] + '-' + ldate[0] + '-' + ldate[1];
    return new Date(date);
  }

}
