import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';
var PaymentDetailComponent = /** @class */ (function () {
    function PaymentDetailComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    PaymentDetailComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    PaymentDetailComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            PMId: 0,
            CardOwnerName: '',
            CardNumber: '',
            ExpirationDate: '',
            CVV: ''
        };
    };
    PaymentDetailComponent.prototype.onSubmit = function (form) {
        if (this.service.formData.PMId == 0) {
            this.insertRecord(form);
        }
        else {
            this.updateRecord(form);
        }
    };
    PaymentDetailComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this.service.postPaymentDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.success("Submited successfully", "Payment Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    PaymentDetailComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this.service.PutPaymentDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.info("Submited successfully", "Payment Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    PaymentDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-payment-detail',
            templateUrl: './payment-detail.component.html',
            styleUrls: ['./payment-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PaymentDetailService,
            ToastrService])
    ], PaymentDetailComponent);
    return PaymentDetailComponent;
}());
export { PaymentDetailComponent };
//# sourceMappingURL=payment-detail.component.js.map