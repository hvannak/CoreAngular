import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/shared/category.model';

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
        this.service.list.data.push(res as Category);
        this.service.list._updateChangeSubscription();
        this.resetForm(form);
        this.toastr.success("Submited successfully","Category Detail Register");
      },
      err=>{
        console.log(err);
      })
  }

  updateRecord(form:NgForm){
    this.service.PutCategoryDetail().subscribe(
      res=>{
        let index = this.service.list.data.findIndex(x=>x.CategoryId == this.service.formData.CategoryId);
        this.service.list.data[index].CategoryId = this.service.formData.CategoryId;
        this.service.list.data[index].CategoryName = this.service.formData.CategoryName;
        this.service.list._updateChangeSubscription();
        this.resetForm(form);
        this.toastr.info("Submited successfully","Category Detail Register");
      },
      err=>{
        console.log(err);
      })
  }

}
