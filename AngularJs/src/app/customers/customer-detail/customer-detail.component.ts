import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/shared/customer.service';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  constructor(public service:CustomerService,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      CustomerId:0,
      CustomerCD:'',
      CustomerName:''
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.CustomerId == 0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  
  insertRecord(form:NgForm){
    this.service.postCustomersDetail().subscribe(
      (res:any)=>{

        if(res.ErrorCode == 0){
          this.service.list.data.push(res as Customer);
          this.service.list._updateChangeSubscription();
          this.resetForm(form);
          this.toastr.success("Submited successfully","Customer Register");
        }
        else if(res.ErrorCode == '2601'){
          this.toastr.error('Customer is already taken','Customer failed.');
        }
        else{
          this.toastr.error('Customer is failed','Customer failed.');
        }
      },
      err=>{
        console.log(err);
      })
  }

  updateRecord(form:NgForm){
    this.service.PutCustomersDetail().subscribe(
      res=>{
        let index = this.service.list.data.findIndex(x=>x.CustomerId == this.service.formData.CustomerId);
        this.service.list.data[index].CustomerId = this.service.formData.CustomerId;
        this.service.list.data[index].CustomerCD = this.service.formData.CustomerCD;
        this.service.list.data[index].CustomerName = this.service.formData.CustomerName;
        this.service.list._updateChangeSubscription();
        this.resetForm(form);
        this.toastr.info("Submited successfully","Customer Register");
      },
      err=>{
        console.log("error here")
        console.log(err);
      })
  }
}
