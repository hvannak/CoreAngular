import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var WarehouseaccessService = /** @class */ (function () {
    function WarehouseaccessService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.userAdded = [];
        this.formModel = this.fb.group({
            WarehouseAccessId: [''],
            UserId: ['', Validators.required],
            WarehouseId: ['', Validators.required],
        });
    }
    WarehouseaccessService.prototype.getWarehouseaccessList = function () {
        return this.http.get(environment.apiURL + '/WarehouseAccesses').toPromise();
    };
    WarehouseaccessService.prototype.getWarehouseaccessByID = function (deviceValue) {
        return this.http.get(environment.apiURL + '/WarehouseAccesses/' + deviceValue).toPromise();
    };
    WarehouseaccessService.prototype.onDelete = function (id, warhouseId) {
        console.log(environment.apiURL + '/WarehouseAccesses/' + id + "/" + warhouseId);
        return this.http.delete(environment.apiURL + '/WarehouseAccesses/' + id + "/" + warhouseId).toPromise();
    };
    WarehouseaccessService.prototype.onAdd = function (item) {
        var body = {
            WarehouseId: this.formModel.value.WarehouseId,
            UserId: item.Id
        };
        return this.http.post(environment.apiURL + '/WarehouseAccesses', body);
    };
    WarehouseaccessService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient])
    ], WarehouseaccessService);
    return WarehouseaccessService;
}());
export { WarehouseaccessService };
//# sourceMappingURL=warehouseaccess.service.js.map