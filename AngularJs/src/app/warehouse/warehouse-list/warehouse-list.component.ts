import { Component, OnInit, ViewChild } from '@angular/core';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { ToastrService } from 'ngx-toastr';
import { Warehouse } from 'src/app/shared/warehouse.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {

  displayedColumns: string[] = ['WarehouseName','Delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public service:WarehouseService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getWarehouse().then(res => {
      this.service.list = new MatTableDataSource(res as Array<Warehouse>);
      this.service.list.paginator = this.paginator;
      this.service.list.sort = this.sort;
    })
  }

  populateForm(pd:Warehouse){
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
     this.service.DeleteWarehousesDetail(PMId).subscribe(
       res => {
        let index = this.service.list.data.findIndex(x=>x.WarehouseId == PMId);
        this.service.list.data.splice(index,1);
        this.service.list._updateChangeSubscription();
         this.toastr.warning("Deleted successfully","Warehouse Detail Register");
       },
       err => {
         console.log(err);
       }
     )
   }

  }
}
