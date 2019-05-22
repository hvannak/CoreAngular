import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RoleService } from '../shared/role.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
var RolesComponent = /** @class */ (function () {
    function RolesComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
    }
    RolesComponent.prototype.ngOnInit = function () {
        this.refreshList();
    };
    RolesComponent.prototype.refreshList = function () {
        var _this = this;
        this.service.getRolesList().then(function (res) { return _this.roleList = res; });
    };
    RolesComponent.prototype.openForEdit = function (id) {
        this.router.navigate(['/role/edit/' + id]);
    };
    RolesComponent.prototype.onRoleDelete = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.service.deleteRole(id).then(function (res) {
                _this.refreshList();
                _this.toastr.warning("Deleted Successfully", "Restaurent App.");
            });
        }
    };
    RolesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-roles',
            templateUrl: './roles.component.html',
            styleUrls: ['./roles.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [RoleService,
            Router,
            ToastrService])
    ], RolesComponent);
    return RolesComponent;
}());
export { RolesComponent };
//# sourceMappingURL=roles.component.js.map