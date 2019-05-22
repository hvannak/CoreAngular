import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.refreshList();
    };
    OrdersComponent.prototype.refreshList = function () {
        var _this = this;
        this.service.getOrderList().then(function (res) { return _this.orderList = res; });
    };
    OrdersComponent.prototype.openForEdit = function (orderId) {
        this.router.navigate(['/order/edit/' + orderId]);
    };
    OrdersComponent.prototype.onOrderDelete = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.service.deleteOrder(id).then(function (res) {
                _this.refreshList();
                _this.toastr.warning("Deleted Successfully", "Order Register.");
            });
        }
    };
    OrdersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-orders',
            templateUrl: './orders.component.html',
            styleUrls: ['./orders.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [OrderService,
            Router,
            ToastrService])
    ], OrdersComponent);
    return OrdersComponent;
}());
export { OrdersComponent };
//# sourceMappingURL=orders.component.js.map