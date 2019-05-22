import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
var PaymentDetailService = /** @class */ (function () {
    function PaymentDetailService(http) {
        this.http = http;
    }
    PaymentDetailService.prototype.postPaymentDetail = function () {
        return this.http.post(environment.apiURL + "/PaymentDetail", this.formData);
    };
    PaymentDetailService.prototype.PutPaymentDetail = function () {
        return this.http.put(environment.apiURL + "/PaymentDetail/" + this.formData.PMId, this.formData);
    };
    PaymentDetailService.prototype.DeletePaymentDetail = function (id) {
        return this.http.delete(environment.apiURL + "/PaymentDetail/" + id);
    };
    PaymentDetailService.prototype.refressList = function () {
        var _this = this;
        this.http.get(environment.apiURL + "/PaymentDetail")
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    PaymentDetailService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PaymentDetailService);
    return PaymentDetailService;
}());
export { PaymentDetailService };
//# sourceMappingURL=payment-detail.service.js.map