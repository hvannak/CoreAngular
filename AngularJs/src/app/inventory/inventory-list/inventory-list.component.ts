import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Inventory } from 'src/app/shared/inventory.model';
import { InventoryService } from 'src/app/shared/inventory.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  displayedColumns: string[] = ['InventoryDesr','Price','Delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public service:InventoryService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getInventory().then(res => {
      this.service.list = new MatTableDataSource(res as Array<Inventory>);
      this.service.list.paginator = this.paginator;
      this.service.list.sort = this.sort;
    });
  }

  getInventoryByLastRecord(){
    // let inventoryId = this.service.list.data.map(x=>x.InventoryId);
    // let last = Math.max.apply(Math, inventoryId);
    let row = this.service.list.data.length;
    this.service.getInventoryByLast(row).then((res:any) => {
      if(res.length > 0){
        res.forEach(element => {
          this.service.list.data.push(element);
        });
        this.service.list._updateChangeSubscription();
      }
      else{
        this.toastr.info("There are not records load.","Inventory Detail Register");
      }
    });
  }


  populateForm(pd:Inventory){
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
     this.service.DeleteInventoryDetail(PMId).subscribe(
       res => {
        let index = this.service.list.data.findIndex(x=>x.InventoryId == PMId);
        this.service.list.data.splice(index,1);
        this.service.list._updateChangeSubscription();
         this.toastr.warning("Deleted successfully","Inventory Detail Register");
       },
       err => {
         console.log(err);
       }
     )
   }
  }


}
