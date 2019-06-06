import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StandardnameService } from 'src/app/shared/standardname.service';
import { NgForm } from '@angular/forms';
import { Standard } from 'src/app/shared/standard.model';
import { Standardname } from 'src/app/shared/standardname.model';

@Component({
  selector: 'app-standardname-detail',
  templateUrl: './standardname-detail.component.html',
  styleUrls: ['./standardname-detail.component.css']
})
export class StandardnameDetailComponent implements OnInit {

  constructor(public service:StandardnameService,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      StandardNameId:0,
      Standard:'',
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.StandardNameId == 0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  
  insertRecord(form:NgForm){
    this.service.postStandardDetail().subscribe(
      res=>{
        this.service.list.data.push(res as Standardname);
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
        let index = this.service.list.data.findIndex(x=>x.StandardNameId == this.service.formData.StandardNameId);
        this.service.list.data[index].StandardNameId = this.service.formData.StandardNameId;
        this.service.list.data[index].Standard = this.service.formData.Standard;
        this.service.list._updateChangeSubscription();
        this.resetForm(form);
        this.toastr.info("Submited successfully","Standard Detail Register");
      },
      err=>{
        console.log(err);
      })
  }

}
