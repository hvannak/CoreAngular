import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  constructor(public service:CategoryService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      CategoryId:0,
      CategoryName:''
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.CategoryId == 0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  
  insertRecord(form:NgForm){
    this.service.postCategoryDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success("Submited successfully","Category Detail Register");
        this.service.refressList();
      },
      err=>{
        console.log(err);
      })
  }

  updateRecord(form:NgForm){
    this.service.PutCategoryDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.info("Submited successfully","Category Detail Register");
        this.service.refressList();
      },
      err=>{
        console.log(err);
      })
  }

}
