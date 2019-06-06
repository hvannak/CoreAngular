import { Component, OnInit, ViewChild } from '@angular/core';
import { UomService } from 'src/app/shared/uom.service';
import { ToastrService } from 'ngx-toastr';
import { Uom } from 'src/app/shared/uom';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-uom-list',
  templateUrl: './uom-list.component.html',
  styleUrls: ['./uom-list.component.css']
})
export class UomListComponent implements OnInit {

  displayedColumns: string[] = ['UOM','Delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public service:UomService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getUom().then(res=> {
      this.service.list = new MatTableDataSource(res as Array<Uom>);
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

  populateForm(pd:Uom){
    this.service.formData = Object.assign({},pd);
 }

 onDelete(PMId){
   if(confirm('Are you sure to delete this record?')){
     this.service.DeleteUomDetail(PMId).subscribe(
       res => {
        let index = this.service.list.data.findIndex(x=>x.UomId == PMId);
        this.service.list.data.splice(index,1);
        this.service.list._updateChangeSubscription();
         this.toastr.warning("Deleted successfully","Uom Detail Register");
       },
       err => {
         console.log(err);
       }
     )
   }

  }

}
