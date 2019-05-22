import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { ToastrService } from 'ngx-toastr';
var WarehouseDetailsComponent = /** @class */ (function () {
    function WarehouseDetailsComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    WarehouseDetailsComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    WarehouseDetailsComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            WarehouseId: 0,
            WarehouseName: ''
        };
    };
    WarehouseDetailsComponent.prototype.onSubmit = function (form) {
        if (this.service.formData.WarehouseId == 0) {
            this.insertRecord(form);
        }
        else {
            this.updateRecord(form);
        }
    };
    WarehouseDetailsComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this.service.postWarehousesDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.success("Submited successfully", "Warehouse Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    WarehouseDetailsComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this.service.PutWarehousesDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.info("Submited successfully", "Warehouse Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    WarehouseDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-warehouse-details',
            templateUrl: './warehouse-details.component.html',
            styleUrls: ['./warehouse-details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [WarehouseService,
            ToastrService])
    ], WarehouseDetailsComponent);
    return WarehouseDetailsComponent;
}());
export { WarehouseDetailsComponent };
//# sourceMappingURL=warehouse-details.component.js.map