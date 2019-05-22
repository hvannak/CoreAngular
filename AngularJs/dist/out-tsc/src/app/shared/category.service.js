import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.postCategoryDetail = function () {
        return this.http.post(environment.apiURL + "/Categories", this.formData);
    };
    CategoryService.prototype.PutCategoryDetail = function () {
        return this.http.put(environment.apiURL + "/Categories/" + this.formData.CategoryId, this.formData);
    };
    CategoryService.prototype.DeleteCategoryDetail = function (id) {
        return this.http.delete(environment.apiURL + "/Categories/" + id);
    };
    CategoryService.prototype.refressList = function () {
        var _this = this;
        this.http.get(environment.apiURL + "/Categories")
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    CategoryService.prototype.getCategory = function () {
        return this.http.get(environment.apiURL + "/Categories").toPromise();
    };
    CategoryService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CategoryService);
    return CategoryService;
}());
export { CategoryService };
//# sourceMappingURL=category.service.js.map