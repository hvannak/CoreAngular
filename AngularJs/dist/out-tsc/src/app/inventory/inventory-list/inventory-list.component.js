import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InventoryService } from 'src/app/shared/inventory.service';
var InventoryListComponent = /** @class */ (function () {
    function InventoryListComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    InventoryListComponent.prototype.ngOnInit = function () {
        this.service.refressList();
    };
    InventoryListComponent.prototype.populateForm = function (pd) {
        this.service.formData = Object.assign({}, pd);
    };
    InventoryListComponent.prototype.onDelete = function (PMId) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.service.DeleteInventoryDetail(PMId).subscribe(function (res) {
                _this.service.refressList();
                _this.toastr.warning("Deleted successfully", "Inventory Detail Register");
            }, function (err) {
                console.log(err);
            });
        }
    };
    InventoryListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-inventory-list',
            templateUrl: './inventory-list.component.html',
            styleUrls: ['./inventory-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [InventoryService,
            ToastrService])
    ], InventoryListComponent);
    return InventoryListComponent;
}());
export { InventoryListComponent };
//# sourceMappingURL=inventory-list.component.js.map