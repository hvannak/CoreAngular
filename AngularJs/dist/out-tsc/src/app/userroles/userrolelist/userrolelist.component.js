import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
var UserrolelistComponent = /** @class */ (function () {
    function UserrolelistComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
    }
    UserrolelistComponent.prototype.ngOnInit = function () {
        this.refressList();
    };
    UserrolelistComponent.prototype.populateForm = function (item) {
        this.service.userroleModel.setValue({
            UserId: item.UserId,
            UserName: item.UserName,
            Roles: item.Roles
        });
        this.service.rolesAdded = item.Roles;
        console.log(this.service.rolesAdded);
    };
    UserrolelistComponent.prototype.refressList = function () {
        var _this = this;
        this.service.getUserRoles().then(function (res) { return _this.userroleList = res; });
    };
    UserrolelistComponent.prototype.onUserDelete = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.service.deleteUser(id).then(function (res) {
                _this.refressList();
                _this.toastr.warning("Deleted Successfully", "User Roles.");
            });
        }
    };
    UserrolelistComponent = tslib_1.__decorate([
        Component({
            selector: 'app-userrolelist',
            templateUrl: './userrolelist.component.html',
            styleUrls: ['./userrolelist.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService, Router,
            ToastrService])
    ], UserrolelistComponent);
    return UserrolelistComponent;
}());
export { UserrolelistComponent };
//# sourceMappingURL=userrolelist.component.js.map