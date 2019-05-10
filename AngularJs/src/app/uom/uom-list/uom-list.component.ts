import { Component, OnInit } from '@angular/core';
import { UomService } from 'src/app/shared/uom.service';
import { ToastrService } from 'ngx-toastr';
import { Uom } from 'src/app/shared/uom';

@Component({
  selector: 'app-uom-list',
  templateUrl: './uom-list.component.html',
  styleUrls: ['./uom-list.component.css']
})
export class UomListComponent implements OnInit {

  constructor(public service:UomService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refressList();
  }

  populateForm(pd:Uom){
    this.service.formData = Object.assign({},pd);
 }

 onDelete(PMId){
   if(confirm('Are you sure to delete this record?')){
     this.service.DeleteUomDetail(PMId).subscribe(
       res => {
         this.service.refressList();
         this.toastr.warning("Deleted successfully","Uom Detail Register");
       },
       err => {
         console.log(err);
       }
     )
   }

  }

}
