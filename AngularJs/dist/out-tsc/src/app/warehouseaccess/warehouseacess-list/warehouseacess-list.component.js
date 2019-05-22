import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { WarehouseaccessService } from 'src/app/shared/warehouseaccess.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
var WarehouseacessListComponent = /** @class */ (function () {
    function WarehouseacessListComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
    }
    WarehouseacessListComponent.prototype.ngOnInit = function () {
    };
    WarehouseacessListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-warehouseacess-list',
            templateUrl: './warehouseacess-list.component.html',
            styleUrls: ['./warehouseacess-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [WarehouseaccessService, Router,
            ToastrService])
    ], WarehouseacessListComponent);
    return WarehouseacessListComponent;
}());
export { WarehouseacessListComponent };
//# sourceMappingURL=warehouseacess-list.component.js.map