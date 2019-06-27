import { Component, OnInit, ViewChild } from '@angular/core';
import { DailyanimalgrowService } from 'src/app/shared/dailyanimalgrow.service';
import { ToastrService } from 'ngx-toastr';
import { Dailyanimalgrow } from 'src/app/shared/dailyanimalgrow.model';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-dailyanimalgrow-list',
  templateUrl: './dailyanimalgrow-list.component.html',
  styleUrls: ['./dailyanimalgrow-list.component.css']
})
export class DailyanimalgrowListComponent implements OnInit {

  displayedColumns: string[] = ['ProjectName','WarehouseName', 'InventoryDesc','DateGrow','Weight','Delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public service:DailyanimalgrowService,private toastr: ToastrService) { }

  ngOnInit() {
    this.getDailyGrow();
  }

  getDailyGrow(){
    return this.service.getDailyGrow().then(res => {
      this.service.list = new MatTableDataSource(res as Array<Dailyanimalgrow>);
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
    this.service.deleteDailyGrow(PMId).subscribe(
      res => {
        let index = this.service.list.data.findIndex(x=>x.DailyGrowId == PMId);
        this.service.list.data.splice(index,1);
        this.service.list._updateChangeSubscription();
        this.toastr.warning("Deleted successfully","Daily Grow Register");
      },
      err => {
        console.log(err);
      }
    )
  }
 }

}
