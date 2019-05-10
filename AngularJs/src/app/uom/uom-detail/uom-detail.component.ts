import { Component, OnInit } from '@angular/core';
import { UomService } from 'src/app/shared/uom.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-uom-detail',
  templateUrl: './uom-detail.component.html',
  styleUrls: ['./uom-detail.component.css']
})
export class UomDetailComponent implements OnInit {

  constructor(public service:UomService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      UomId:0,
      UOM:''
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.UomId == 0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  
  insertRecord(form:NgForm){
    this.service.postUomDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success("Submited successfully","UOM Detail Register");
        this.service.refressList();
      },
      err=>{
        console.log(err);
      })
  }

  updateRecord(form:NgForm){
    this.service.PutUomDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.info("Submited successfully","UOM Detail Register");
        this.service.refressList();
      },
      err=>{
        console.log(err);
      })
  }
}
