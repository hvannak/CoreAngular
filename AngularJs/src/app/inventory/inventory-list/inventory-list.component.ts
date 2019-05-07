import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Inventory } from 'src/app/shared/inventory.model';
import { InventoryService } from 'src/app/shared/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  constructor(public service:InventoryService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refressList();
  }

  populateForm(pd:Inventory){
    this.service.formData = Object.assign({},pd);
 }

 onDelete(PMId){
   if(confirm('Are you sure to delete this record?')){
     this.service.DeleteInventoryDetail(PMId).subscribe(
       res => {
         this.service.refressList();
         this.toastr.warning("Deleted successfully","Inventory Detail Register");
       },
       err => {
         console.log(err);
       }
     )
   }
  }


}
