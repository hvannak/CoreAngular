import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['CustomerCD','CustomerName','Delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public service:CustomerService,private toastr:ToastrService) { }

  ngOnInit() {
    this.refressList();
  }

  populateForm(pd:Customer){
    this.service.formData = Object.assign({},pd);
 }

 refressList(){
  this.service.getCustomerList().then(res=> {
    this.service.list = new MatTableDataSource(res as Array<Customer>);
    this.service.list.paginator = this.paginator;
    this.service.list.sort = this.sort;
  });
}

applyFilter(filterValue: string) {
  this.service.list.filter = filterValue.trim().toLowerCase();

  if (this.service.list.paginator) {
    this.service.list.paginator.firstPage();
  }
}

 onDelete(PMId){
   if(confirm('Are you sure to delete this record?')){
     this.service.DeleteCustomersDetail(PMId).subscribe(
       res => {
        let index = this.service.list.data.findIndex(x=>x.CustomerId == PMId);
        this.service.list.data.splice(index,1);
        this.service.list._updateChangeSubscription();
         this.toastr.warning("Deleted successfully","Customer Register");
       },
       err => {
         console.log(err);
       }
     )
   }
  }

}
