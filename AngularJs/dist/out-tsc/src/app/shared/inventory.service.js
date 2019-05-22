import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
var InventoryService = /** @class */ (function () {
    function InventoryService(http) {
        this.http = http;
    }
    InventoryService.prototype.postInventoryDetail = function () {
        return this.http.post(environment.apiURL + "/Inventorys", this.formData);
    };
    InventoryService.prototype.PutInventoryDetail = function () {
        return this.http.put(environment.apiURL + "/Inventorys/" + this.formData.InventoryId, this.formData);
    };
    InventoryService.prototype.DeleteInventoryDetail = function (id) {
        return this.http.delete(environment.apiURL + "/Inventorys/" + id);
    };
    InventoryService.prototype.refressList = function () {
        var _this = this;
        this.http.get(environment.apiURL + "/Inventorys")
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    InventoryService.prototype.getInventory = function () {
        return this.http.get(environment.apiURL + "/Inventorys").toPromise();
    };
    InventoryService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], InventoryService);
    return InventoryService;
}());
export { InventoryService };
//# sourceMappingURL=inventory.service.js.map