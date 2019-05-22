import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService.prototype.getItemList = function () {
        return this.http.get(environment.apiURL + '/Inventorys').toPromise();
    };
    ItemService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ItemService);
    return ItemService;
}());
export { ItemService };
//# sourceMappingURL=item.service.js.map