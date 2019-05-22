import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { ToastrService } from 'ngx-toastr';
var WarehouseListComponent = /** @class */ (function () {
    function WarehouseListComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    WarehouseListComponent.prototype.ngOnInit = function () {
        this.service.refressList();
    };
    WarehouseListComponent.prototype.populateForm = function (pd) {
        this.service.formData = Object.assign({}, pd);
    };
    WarehouseListComponent.prototype.onDelete = function (PMId) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.service.DeleteWarehousesDetail(PMId).subscribe(function (res) {
                _this.service.refressList();
                _this.toastr.warning("Deleted successfully", "Warehouse Detail Register");
            }, function (err) {
                console.log(err);
            });
        }
    };
    WarehouseListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-warehouse-list',
            templateUrl: './warehouse-list.component.html',
            styleUrls: ['./warehouse-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [WarehouseService, ToastrService])
    ], WarehouseListComponent);
    return WarehouseListComponent;
}());
export { WarehouseListComponent };
//# sourceMappingURL=warehouse-list.component.js.map