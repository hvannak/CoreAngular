import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';
var PaymentDetailListComponent = /** @class */ (function () {
    function PaymentDetailListComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    PaymentDetailListComponent.prototype.ngOnInit = function () {
        this.service.refressList();
    };
    PaymentDetailListComponent.prototype.populateForm = function (pd) {
        this.service.formData = Object.assign({}, pd);
    };
    PaymentDetailListComponent.prototype.onDelete = function (PMId) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.service.DeletePaymentDetail(PMId).subscribe(function (res) {
                _this.service.refressList();
                _this.toastr.warning("Deleted successfully", "Payment Detail Register");
            }, function (err) {
                console.log(err);
            });
        }
    };
    PaymentDetailListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-payment-detail-list',
            templateUrl: './payment-detail-list.component.html',
            styleUrls: ['./payment-detail-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PaymentDetailService,
            ToastrService])
    ], PaymentDetailListComponent);
    return PaymentDetailListComponent;
}());
export { PaymentDetailListComponent };
//# sourceMappingURL=payment-detail-list.component.js.map