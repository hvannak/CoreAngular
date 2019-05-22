import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UomService } from 'src/app/shared/uom.service';
import { ToastrService } from 'ngx-toastr';
var UomListComponent = /** @class */ (function () {
    function UomListComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    UomListComponent.prototype.ngOnInit = function () {
        this.service.refressList();
    };
    UomListComponent.prototype.populateForm = function (pd) {
        this.service.formData = Object.assign({}, pd);
    };
    UomListComponent.prototype.onDelete = function (PMId) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.service.DeleteUomDetail(PMId).subscribe(function (res) {
                _this.service.refressList();
                _this.toastr.warning("Deleted successfully", "Uom Detail Register");
            }, function (err) {
                console.log(err);
            });
        }
    };
    UomListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-uom-list',
            templateUrl: './uom-list.component.html',
            styleUrls: ['./uom-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UomService, ToastrService])
    ], UomListComponent);
    return UomListComponent;
}());
export { UomListComponent };
//# sourceMappingURL=uom-list.component.js.map