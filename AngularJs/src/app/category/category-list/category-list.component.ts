import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/shared/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(public service:CategoryService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refressList();
  }

  populateForm(pd:Category){
    this.service.formData = Object.assign({},pd);
 }

 onDelete(PMId){
   if(confirm('Are you sure to delete this record?')){
     this.service.DeleteCategoryDetail(PMId).subscribe(
       res => {
         this.service.refressList();
         this.toastr.warning("Deleted successfully","Category Detail Register");
       },
       err => {
         console.log(err);
       }
     )
   }

  }

}
