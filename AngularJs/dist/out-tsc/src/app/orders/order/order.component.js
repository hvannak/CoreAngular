import * as tslib_1 from "tslib";
import { CustomerService } from './../../shared/customer.service';
import { OrderService } from './../../shared/order.service';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
var OrderComponent = /** @class */ (function () {
    function OrderComponent(service, dialog, customerService, toastr, router, currentRoute) {
        this.service = service;
        this.dialog = dialog;
        this.customerService = customerService;
        this.toastr = toastr;
        this.router = router;
        this.currentRoute = currentRoute;
        this.isValid = true;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var orderId = this.currentRoute.snapshot.paramMap.get('id');
        if (orderId == null)
            this.resetForm();
        else {
            this.service.getOrderByID(parseInt(orderId)).then(function (res) {
                _this.service.formData = res.orders;
                _this.service.orderItems = res.orderlines;
            });
        }
        this.customerService.getCustomerList().then(function (res) { return _this.customerList = res; });
    };
    OrderComponent.prototype.resetForm = function (form) {
        if (form = null)
            form.resetForm();
        this.service.formData = {
            OrderId: 0,
            OrderNo: Math.floor(100000 + Math.random() * 900000).toString(),
            CustomerId: 0,
            PMethod: '',
            GTotal: 0,
            DeletedOrderItemIDs: ''
        };
        this.service.orderItems = [];
    };
    OrderComponent.prototype.AddOrEditOrderItem = function (orderItemIndex, OrderId) {
        var _this = this;
        var dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = "50%";
        dialogConfig.data = { orderItemIndex: orderItemIndex, OrderId: OrderId };
        this.dialog.open(OrderItemsComponent, dialogConfig).afterClosed().subscribe(function (res) {
            _this.updateGrandTotal();
        });
    };
    OrderComponent.prototype.onDeleteOrderItem = function (orderItemID, i) {
        if (orderItemID != null)
            this.service.formData.DeletedOrderItemIDs += orderItemID + ",";
        this.service.orderItems.splice(i, 1);
        this.updateGrandTotal();
    };
    OrderComponent.prototype.updateGrandTotal = function () {
        this.service.formData.GTotal = this.service.orderItems.reduce(function (prev, curr) {
            return prev + curr.Total;
        }, 0);
        this.service.formData.GTotal = parseFloat(this.service.formData.GTotal.toFixed(2));
    };
    OrderComponent.prototype.validateForm = function () {
        this.isValid = true;
        if (this.service.formData.CustomerId == 0)
            this.isValid = false;
        else if (this.service.orderItems.length == 0)
            this.isValid = false;
        return this.isValid;
    };
    OrderComponent.prototype.onSubmit = function (form) {
        if (this.service.formData.OrderId == 0) {
            this.insertRecord(form);
        }
        else {
            this.updateRecord(form);
        }
    };
    OrderComponent.prototype.insertRecord = function (form) {
        var _this = this;
        if (this.validateForm()) {
            this.service.postOrders().subscribe(function (res) {
                _this.resetForm();
                _this.toastr.success('Submitted Successfully', 'Order Register.');
                _this.router.navigate(['/orders']);
            });
        }
    };
    OrderComponent.prototype.updateRecord = function (form) {
        var _this = this;
        if (this.validateForm()) {
            this.service.putOrders().subscribe(function (res) {
                _this.resetForm();
                _this.toastr.success('Submitted Successfully', 'Order Register.');
                _this.router.navigate(['/orders']);
            });
        }
    };
    OrderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-order',
            templateUrl: './order.component.html',
            styleUrls: ['./order.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [OrderService,
            MatDialog,
            CustomerService,
            ToastrService,
            Router,
            ActivatedRoute])
    ], OrderComponent);
    return OrderComponent;
}());
export { OrderComponent };
//# sourceMappingURL=order.component.js.map