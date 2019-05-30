import { Component, OnInit } from '@angular/core';
import { StandardService } from 'src/app/shared/standard.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { UomService } from 'src/app/shared/uom.service';
import { Standard } from 'src/app/shared/standard.model';

@Component({
  selector: 'app-standard-detail',
  templateUrl: './standard-detail.component.html',
  styleUrls: ['./standard-detail.component.css']
})
export class StandardDetailComponent implements OnInit {

  uomList;
  constructor(public service:StandardService,private uomService:UomService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.getUom();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      StandardKey:0,
      StandardName:'',
      NumberOfDay:0,
      ResultOfDay:0,
      UomId:0,
      UOM:''
    }
  }

  getUom(){
    this.uomService.getUom().then(res => this.uomList = res);
  }

  onSubmit(form:NgForm){
    if(this.service.formData.StandardKey == 0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  
  insertRecord(form:NgForm){
    this.service.postStandardDetail().subscribe(
      res=>{
        this.service.list.data.push(res as Standard);
        this.service.list._updateChangeSubscription();
        this.resetForm(form);
        this.toastr.success("Submited successfully","Standard Detail Register");
      },
      err=>{
        console.log(err);
      })
  }

  updateRecord(form:NgForm){
    this.service.PutStandardDetail().subscribe(
      res=>{
        let index = this.service.list.data.findIndex(x=>x.StandardKey == this.service.formData.StandardKey);
        this.service.list.data[index].StandardKey = this.service.formData.StandardKey;
        this.service.list.data[index].StandardName = this.service.formData.StandardName;
        this.service.list.data[index].NumberOfDay = this.service.formData.NumberOfDay;
        this.service.list.data[index].ResultOfDay = this.service.formData.ResultOfDay;
        this.service.list.data[index].UOM = this.service.formData.UOM;
        this.service.list.data[index].UomId = this.service.formData.UomId;
        this.service.list._updateChangeSubscription();
        this.resetForm(form);
        this.toastr.info("Submited successfully","Standard Detail Register");
      },
      err=>{
        console.log(err);
      })
  }
}
