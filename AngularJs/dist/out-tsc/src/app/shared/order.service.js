import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.saveOrUpdateOrder = function () {
        var body = tslib_1.__assign({}, this.formData, { OrderLines: this.orderItems });
        return this.http.post(environment.apiURL + '/Orders', body);
    };
    OrderService.prototype.postOrders = function () {
        var body = tslib_1.__assign({}, this.formData, { OrderLines: this.orderItems });
        return this.http.post(environment.apiURL + '/Orders', body);
    };
    OrderService.prototype.putOrders = function () {
        var body = tslib_1.__assign({}, this.formData, { OrderLines: this.orderItems });
        return this.http.put(environment.apiURL + '/Orders/' + this.formData.OrderId, body);
    };
    OrderService.prototype.getOrderList = function () {
        return this.http.get(environment.apiURL + '/Orders').toPromise();
    };
    OrderService.prototype.getOrderByID = function (id) {
        return this.http.get(environment.apiURL + '/Orders/' + id).toPromise();
    };
    OrderService.prototype.deleteOrder = function (id) {
        return this.http.delete(environment.apiURL + '/Orders/' + id).toPromise();
    };
    OrderService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], OrderService);
    return OrderService;
}());
export { OrderService };
//# sourceMappingURL=order.service.js.map