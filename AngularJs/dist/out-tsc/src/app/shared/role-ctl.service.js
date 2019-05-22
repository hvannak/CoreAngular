import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var RoleCtlService = /** @class */ (function () {
    function RoleCtlService(http) {
        this.http = http;
    }
    RoleCtlService.prototype.getTreeList = function () {
        return this.http.get(environment.apiURL + '/CtlDiscovery').toPromise();
    };
    RoleCtlService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RoleCtlService);
    return RoleCtlService;
}());
export { RoleCtlService };
//# sourceMappingURL=role-ctl.service.js.map