import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UomService } from 'src/app/shared/uom.service';
import { ToastrService } from 'ngx-toastr';
var UomDetailComponent = /** @class */ (function () {
    function UomDetailComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    UomDetailComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    UomDetailComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            UomId: 0,
            UOM: ''
        };
    };
    UomDetailComponent.prototype.onSubmit = function (form) {
        if (this.service.formData.UomId == 0) {
            this.insertRecord(form);
        }
        else {
            this.updateRecord(form);
        }
    };
    UomDetailComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this.service.postUomDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.success("Submited successfully", "UOM Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    UomDetailComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this.service.PutUomDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.info("Submited successfully", "UOM Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    UomDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-uom-detail',
            templateUrl: './uom-detail.component.html',
            styleUrls: ['./uom-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UomService,
            ToastrService])
    ], UomDetailComponent);
    return UomDetailComponent;
}());
export { UomDetailComponent };
//# sourceMappingURL=uom-detail.component.js.map