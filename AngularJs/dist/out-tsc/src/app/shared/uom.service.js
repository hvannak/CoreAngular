import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var UomService = /** @class */ (function () {
    function UomService(http) {
        this.http = http;
    }
    UomService.prototype.postUomDetail = function () {
        return this.http.post(environment.apiURL + "/UnitOfMeasures", this.formData);
    };
    UomService.prototype.PutUomDetail = function () {
        return this.http.put(environment.apiURL + "/UnitOfMeasures/" + this.formData.UomId, this.formData);
    };
    UomService.prototype.DeleteUomDetail = function (id) {
        return this.http.delete(environment.apiURL + "/UnitOfMeasures/" + id);
    };
    UomService.prototype.refressList = function () {
        var _this = this;
        this.http.get(environment.apiURL + "/UnitOfMeasures")
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    UomService.prototype.getUom = function () {
        return this.http.get(environment.apiURL + "/UnitOfMeasures")
            .toPromise();
    };
    UomService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UomService);
    return UomService;
}());
export { UomService };
//# sourceMappingURL=uom.service.js.map