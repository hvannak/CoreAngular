import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { WarehouseaccessService } from 'src/app/shared/warehouseaccess.service';
import { UserService } from 'src/app/shared/user.service';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { ToastrService } from 'ngx-toastr';
var WarehouseacessDetailComponent = /** @class */ (function () {
    function WarehouseacessDetailComponent(service, userService, toastr, warehouseService) {
        this.service = service;
        this.userService = userService;
        this.toastr = toastr;
        this.warehouseService = warehouseService;
        this.userwarehouseChange = [];
    }
    WarehouseacessDetailComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.getWarehouses();
    };
    WarehouseacessDetailComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (res) { return _this.userList = res; });
    };
    WarehouseacessDetailComponent.prototype.getWarehouses = function () {
        var _this = this;
        this.warehouseService.getWarehouse().then(function (res) { return _this.warehouseList = res; });
    };
    WarehouseacessDetailComponent.prototype.onAdd = function (item) {
        var _this = this;
        var index = this.userwarehouseChange.findIndex(function (record) { return record.UserName === item.UserName; });
        if (index <= -1) {
            this.userwarehouseChange.push({ UserName: item.UserName });
            this.service.onAdd(item).subscribe(function (res) {
                _this.toastr.success("New role created", "Register WarehouseAccess");
            });
        }
    };
    WarehouseacessDetailComponent.prototype.onDelete = function (item) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.service.onDelete(item.Id, this.warehouseId).then(function (res) {
                var index = _this.userwarehouseChange.findIndex(function (record) { return record.UserName === item.UserName; });
                if (index > -1) {
                    _this.userwarehouseChange.splice(index, 1);
                }
                _this.toastr.warning("Deleted Successfully", "Warehouse Access");
            });
        }
    };
    WarehouseacessDetailComponent.prototype.onChange = function (deviceValue) {
        var _this = this;
        if (this.service.userAdded != null) {
            this.service.userAdded = [];
        }
        this.warehouseId = deviceValue;
        this.service.getWarehouseaccessByID(deviceValue).then(function (res) { return _this.userwarehouseChange = res; });
    };
    WarehouseacessDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-warehouseacess-detail',
            templateUrl: './warehouseacess-detail.component.html',
            styleUrls: ['./warehouseacess-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [WarehouseaccessService, UserService,
            ToastrService, WarehouseService])
    ], WarehouseacessDetailComponent);
    return WarehouseacessDetailComponent;
}());
export { WarehouseacessDetailComponent };
//# sourceMappingURL=warehouseacess-detail.component.js.map