import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service:PaymentDetailService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refressList();
  }
  populateForm(pd:PaymentDetail){
     this.service.formData = Object.assign({},pd);
  }

  onDelete(PMId){
    if(confirm('Are you sure to delete this record?')){
      this.service.DeletePaymentDetail(PMId).subscribe(
        res => {
          this.service.refressList();
          this.toastr.warning("Deleted successfully","Payment Detail Register");
        },
        err => {
          console.log(err);
        }
      )
    }


  }
}
