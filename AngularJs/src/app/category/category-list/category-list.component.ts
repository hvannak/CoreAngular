import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/shared/category.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  displayedColumns: string[] = ['CategoryName','Delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public service:CategoryService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getCategory().then(res=> {
      this.service.list = new MatTableDataSource(res as Array<Category>);
      this.service.list.paginator = this.paginator;
      this.service.list.sort = this.sort;
    });
  }

  populateForm(pd:Category){
    this.service.formData = Object.assign({},pd);
 }

 applyFilter(filterValue: string) {
  this.service.list.filter = filterValue.trim().toLowerCase();

  if (this.service.list.paginator) {
    this.service.list.paginator.firstPage();
  }
}

 onDelete(PMId){
   if(confirm('Are you sure to delete this record?')){
     this.service.DeleteCategoryDetail(PMId).subscribe(
       res => {
        let index = this.service.list.data.findIndex(x=>x.CategoryId == PMId);
        this.service.list.data.splice(index,1);
        this.service.list._updateChangeSubscription();
         this.toastr.warning("Deleted successfully","Category Detail Register");
       },
       err => {
         console.log(err);
       }
     )
   }

  }

}
