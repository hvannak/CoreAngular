import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ReceiptService } from 'src/app/shared/receipt.service';
import { ProjectService } from 'src/app/shared/project.service';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { InventoryService } from 'src/app/shared/inventory.service';
var ReceiptLineComponent = /** @class */ (function () {
    function ReceiptLineComponent(data, dialogRef, service, projectService, warehouseService, inventoryService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.projectService = projectService;
        this.warehouseService = warehouseService;
        this.inventoryService = inventoryService;
    }
    ReceiptLineComponent.prototype.ngOnInit = function () {
        this.getActiveProject();
        this.getInventory();
        if (this.data.receiptLineIndex == null) {
            this.service.formReceiptLine.reset();
            this.service.formReceiptLine.patchValue({
                ReceiptLineId: 0,
                ReceiptId: 0
            });
        }
        else {
            console.log(this.service.receiptLine[this.data.receiptLineIndex].WarehouseId);
            //edit
            this.service.formReceiptLine.setValue(this.service.receiptLine[this.data.receiptLineIndex]);
        }
    };
    ReceiptLineComponent.prototype.getActiveProject = function () {
        var _this = this;
        this.projectService.getActiveProject().then(function (res) { return _this.projectList = res; });
    };
    ReceiptLineComponent.prototype.getInventory = function () {
        var _this = this;
        this.inventoryService.getInventory().then(function (res) { return _this.inventoryList = res; });
    };
    ReceiptLineComponent.prototype.onChangeProject = function (item) {
        var _this = this;
        this.warehouseService.getWarehouseByProjectId(item.target.value).then(function (res) { return _this.warehouseList = res; });
        var text = item.target.options[item.target.options.selectedIndex].text;
        this.service.formReceiptLine.patchValue({
            ProjectName: text
        });
    };
    ReceiptLineComponent.prototype.onChangeWarehouse = function (item) {
        var text = item.target.options[item.target.options.selectedIndex].text;
        this.service.formReceiptLine.patchValue({
            WarehouseName: text
        });
    };
    ReceiptLineComponent.prototype.onChangeInventory = function (item) {
        var text = item.target.options[item.target.options.selectedIndex].text;
        this.service.formReceiptLine.patchValue({
            InventoryDesr: text
        });
    };
    ReceiptLineComponent.prototype.updatePrice = function (valuechange, type) {
        if (type == '1') {
            var extcost = parseFloat((this.service.formReceiptLine.value.UnitCost * valuechange).toFixed(2));
            this.service.formReceiptLine.patchValue({
                ExtCost: extcost
            });
        }
        else {
            var extcost = parseFloat((this.service.formReceiptLine.value.Qty * valuechange).toFixed(2));
            this.service.formReceiptLine.patchValue({
                ExtCost: extcost
            });
        }
    };
    ReceiptLineComponent.prototype.onSubmit = function () {
        if (this.data.receiptLineIndex == null) {
            //add
            this.service.receiptLine.push(this.service.formReceiptLine.value);
        }
        else {
            //edit
            this.service.receiptLine[this.data.receiptLineIndex] = this.service.formReceiptLine.value;
        }
        this.dialogRef.close();
    };
    ReceiptLineComponent = tslib_1.__decorate([
        Component({
            selector: 'app-receipt-line',
            templateUrl: './receipt-line.component.html',
            styleUrls: ['./receipt-line.component.css']
        }),
        tslib_1.__param(0, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [Object, MatDialogRef, ReceiptService,
            ProjectService, WarehouseService, InventoryService])
    ], ReceiptLineComponent);
    return ReceiptLineComponent;
}());
export { ReceiptLineComponent };
//# sourceMappingURL=receipt-line.component.js.map