import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var WarehouseService = /** @class */ (function () {
    function WarehouseService(http) {
        this.http = http;
    }
    WarehouseService.prototype.postWarehousesDetail = function () {
        return this.http.post(environment.apiURL + "/Warehouses", this.formData);
    };
    WarehouseService.prototype.PutWarehousesDetail = function () {
        return this.http.put(environment.apiURL + "/Warehouses/" + this.formData.WarehouseId, this.formData);
    };
    WarehouseService.prototype.DeleteWarehousesDetail = function (id) {
        return this.http.delete(environment.apiURL + "/Warehouses/" + id);
    };
    WarehouseService.prototype.refressList = function () {
        var _this = this;
        this.http.get(environment.apiURL + "/Warehouses")
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    WarehouseService.prototype.getWarehouse = function () {
        return this.http.get(environment.apiURL + "/Warehouses").toPromise();
    };
    WarehouseService.prototype.getWarehouseByProjectId = function (item) {
        return this.http.get(environment.apiURL + "/Warehouses/ProjectId/" + item).toPromise();
    };
    WarehouseService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], WarehouseService);
    return WarehouseService;
}());
export { WarehouseService };
//# sourceMappingURL=warehouse.service.js.map