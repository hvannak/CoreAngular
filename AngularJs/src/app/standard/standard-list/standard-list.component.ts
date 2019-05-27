import { Component, OnInit, ViewChild } from '@angular/core';
import { StandardService } from 'src/app/shared/standard.service';
import { ToastrService } from 'ngx-toastr';
import { Standard } from 'src/app/shared/standard.model';

@Component({
  selector: 'app-standard-list',
  templateUrl: './standard-list.component.html',
  styleUrls: ['./standard-list.component.css']
})
export class StandardListComponent implements OnInit {

  constructor(public service:StandardService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refressList();
  }

  populateForm(pd:Standard){
    this.service.formData = Object.assign({},pd);
 }

 onDelete(PMId){
   if(confirm('Are you sure to delete this record?')){
     this.service.DeleteStandardDetail(PMId).subscribe(
       res => {
         this.service.refressList();
         this.toastr.warning("Deleted successfully","Standard Detail Register");
       },
       err => {
         console.log(err);
       }
     )
   }

  }
}
