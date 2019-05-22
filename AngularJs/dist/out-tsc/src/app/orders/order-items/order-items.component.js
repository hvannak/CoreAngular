import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ItemService } from 'src/app/shared/item.service';
import { OrderService } from 'src/app/shared/order.service';
var OrderItemsComponent = /** @class */ (function () {
    function OrderItemsComponent(data, dialogRef, itemService, orderSevice) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.itemService = itemService;
        this.orderSevice = orderSevice;
        this.isValid = true;
    }
    OrderItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItemList().then(function (res) { return _this.itemList = res; });
        if (this.data.orderItemIndex == null)
            this.formData = {
                OrderItemId: 0,
                OrderId: this.data.OrderId,
                InventoryId: 0,
                ItemName: '',
                Price: 0,
                Quantity: 0,
                Total: 0
            };
        else
            this.formData = Object.assign({}, this.orderSevice.orderItems[this.data.orderItemIndex]);
    };
    OrderItemsComponent.prototype.updatePrice = function (ctrl) {
        if (ctrl.selectedIndex == 0) {
            this.formData.Price = 0;
            this.formData.ItemName = '';
        }
        else {
            this.formData.Price = this.itemList[ctrl.selectedIndex - 1].Price;
            this.formData.ItemName = this.itemList[ctrl.selectedIndex - 1].InventoryDesr;
        }
        this.updateTotal();
    };
    OrderItemsComponent.prototype.updateTotal = function () {
        this.formData.Total = parseFloat((this.formData.Quantity * this.formData.Price).toFixed(2));
    };
    OrderItemsComponent.prototype.onSubmit = function (form) {
        if (this.validateForm(form.value)) {
            if (this.data.orderItemIndex == null)
                this.orderSevice.orderItems.push(form.value);
            else
                this.orderSevice.orderItems[this.data.orderItemIndex] = form.value;
            this.dialogRef.close();
        }
    };
    OrderItemsComponent.prototype.validateForm = function (formData) {
        this.isValid = true;
        if (formData.InventoryId == 0)
            this.isValid = false;
        else if (formData.Quantity == 0)
            this.isValid = false;
        return this.isValid;
    };
    OrderItemsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-order-items',
            templateUrl: './order-items.component.html',
            styleUrls: ['./order-items.component.css']
        }),
        tslib_1.__param(0, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [Object, MatDialogRef,
            ItemService,
            OrderService])
    ], OrderItemsComponent);
    return OrderItemsComponent;
}());
export { OrderItemsComponent };
//# sourceMappingURL=order-items.component.js.map