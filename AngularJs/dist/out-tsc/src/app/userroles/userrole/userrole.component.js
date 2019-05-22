import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/shared/role.service';
var UserroleComponent = /** @class */ (function () {
    function UserroleComponent(service, router, toastr, roleService) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.roleService = roleService;
    }
    UserroleComponent.prototype.ngOnInit = function () {
        this.onGetRole();
    };
    UserroleComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.userroleModel.value.Roles = this.service.rolesAdded;
        this.service.putUser().subscribe(function (res) {
            _this.service.userroleModel.reset();
            _this.toastr.success("Submitted Successfully", "User Roles");
        });
    };
    UserroleComponent.prototype.onGetRole = function () {
        var _this = this;
        this.roleService.getRolesList().then(function (res) { return _this.rolesList = res; });
        ;
    };
    UserroleComponent.prototype.onDelete = function (item) {
        this.service.onDelete(item);
    };
    UserroleComponent.prototype.onAdd = function (item) {
        this.service.onAdd(item);
    };
    UserroleComponent = tslib_1.__decorate([
        Component({
            selector: 'app-userrole',
            templateUrl: './userrole.component.html',
            styleUrls: ['./userrole.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService, Router,
            ToastrService, RoleService])
    ], UserroleComponent);
    return UserroleComponent;
}());
export { UserroleComponent };
//# sourceMappingURL=userrole.component.js.map