import { Component, OnInit } from '@angular/core';
import { StandardService } from 'src/app/shared/standard.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { UomService } from 'src/app/shared/uom.service';

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
        this.resetForm(form);
        this.toastr.success("Submited successfully","Standard Detail Register");
        this.service.refressList();
      },
      err=>{
        console.log(err);
      })
  }

  updateRecord(form:NgForm){
    this.service.PutStandardDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.info("Submited successfully","Standard Detail Register");
        this.service.refressList();
      },
      err=>{
        console.log(err);
      })
  }
}
