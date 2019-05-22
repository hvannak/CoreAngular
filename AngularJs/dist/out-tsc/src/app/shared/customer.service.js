import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.getCustomerList = function () {
        return this.http.get(environment.apiURL + '/Customers').toPromise();
    };
    CustomerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CustomerService);
    return CustomerService;
}());
export { CustomerService };
//# sourceMappingURL=customer.service.js.map