import { CustomerService } from './../../shared/customer.service';
import { OrderService } from './../../shared/order.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';
import { Customer } from 'src/app/shared/customer.model';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  customerList: Customer[];
  isValid: boolean = true;

  constructor(public service:OrderService,
    private dialog: MatDialog,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private router: Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    let orderId = this.currentRoute.snapshot.paramMap.get('id');
    if(orderId==null)
    this.resetForm();
    else{
      this.service.getOrderByID(parseInt(orderId)).then(res=>{
        this.service.formData = res.orders;
        this.service.orderItems = res.orderlines;
      });
    }

    this.customerService.getCustomerList().then(res => this.customerList = res as Customer[]);
  }

  resetForm(form?:NgForm){
    if(form = null)
    form.resetForm();
    this.service.formData = {
      OrderId: 0,
      OrderNo: Math.floor(100000+Math.random()*900000).toString(),
      CustomerId: 0,
      PMethod: '',
      GTotal:0 ,
      DeletedOrderItemIDs: ''
    };
    this.service.orderItems = [];
  }

  AddOrEditOrderItem(orderItemIndex, OrderId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { orderItemIndex, OrderId };
    this.dialog.open(OrderItemsComponent, dialogConfig).afterClosed().subscribe(res => {
      this.updateGrandTotal();
    });
  }

  onDeleteOrderItem(orderItemID: number, i: number) {
    if (orderItemID != null)
      this.service.formData.DeletedOrderItemIDs += orderItemID + ",";
    this.service.orderItems.splice(i, 1);
    this.updateGrandTotal();
  }

  updateGrandTotal() {
    this.service.formData.GTotal = this.service.orderItems.reduce((prev, curr) => {
      return prev + curr.Total;
    }, 0);
    this.service.formData.GTotal = parseFloat(this.service.formData.GTotal.toFixed(2));
  }

  validateForm() {
    this.isValid = true;
    if (this.service.formData.CustomerId == 0)
      this.isValid = false;
    else if (this.service.orderItems.length == 0)
      this.isValid = false;
    return this.isValid;
  }

  onSubmit(form: NgForm) {
    if(this.service.formData.OrderId == 0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  insertRecord(form:NgForm){
    if (this.validateForm()) {
      this.service.postOrders().subscribe(res => {
        this.resetForm();
        this.toastr.success('Submitted Successfully', 'Order Register.');
        this.router.navigate(['/orders']);
      })
    }
  }

  updateRecord(form:NgForm){
    if (this.validateForm()) {
      this.service.putOrders().subscribe(res => {
        this.resetForm();
        this.toastr.success('Submitted Successfully', 'Order Register.');
        this.router.navigate(['/orders']);
      })
    }
  }

}


