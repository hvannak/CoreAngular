import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RoleService } from 'src/app/shared/role.service';
import { ToastrService } from 'ngx-toastr';
import { RoleCtlService } from 'src/app/shared/role-ctl.service';
import { Router, ActivatedRoute } from '@angular/router';
var RoleComponent = /** @class */ (function () {
    function RoleComponent(service, serviceCtl, toastr, currentRoute, router) {
        this.service = service;
        this.serviceCtl = serviceCtl;
        this.toastr = toastr;
        this.currentRoute = currentRoute;
        this.router = router;
    }
    RoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCtl();
        var roleId = this.currentRoute.snapshot.paramMap.get('id');
        if (roleId == null) {
            this.service.formModel.reset();
            this.service.rolesAdded = [];
            this.service.selectedCtl = [];
        }
        else {
            this.service.getRoleByID(roleId).then(function (res) {
                _this.roleList = res;
                _this.service.formModel.patchValue({
                    Id: _this.roleList.Id,
                    RoleName: _this.roleList.Name,
                });
                if (_this.roleList.Access != null) {
                    _this.service.rolesAdded = [];
                    _this.service.selectedCtl = [];
                    var accesslist = JSON.parse(_this.roleList.Access);
                    _this.service.selectedCtl = accesslist;
                    for (var i = 0; i < accesslist.length; i++) {
                        _this.service.rolesAdded.push(accesslist[i].Id);
                    }
                }
                _this.service.formModel.value.Id = roleId;
            });
        }
    };
    RoleComponent.prototype.onSubmit = function () {
        if (this.service.formModel.value.Id == '' || this.service.formModel.value.Id == null) {
            this.postRole();
            console.log('post');
        }
        else {
            console.log('put');
            this.putRole();
        }
    };
    RoleComponent.prototype.postRole = function () {
        var _this = this;
        this.service.postRoles().subscribe(function (res) {
            if (res.Succeeded) {
                _this.toastr.success("New role created", "Register Role");
            }
        }, function (err) {
            console.log(err);
        });
    };
    RoleComponent.prototype.putRole = function () {
        var _this = this;
        this.service.putRoles().subscribe(function (res) {
            if (res.Succeeded) {
                _this.toastr.success("New role updated", "Register Role");
            }
        }, function (err) {
            console.log(err);
        });
    };
    RoleComponent.prototype.getCtl = function () {
        var _this = this;
        this.serviceCtl.getTreeList().then(function (res) { return _this.ctlList = res; });
    };
    RoleComponent.prototype.onDelete = function (item) {
        this.service.onDelete(item);
    };
    RoleComponent.prototype.onAdd = function (item) {
        this.service.onAdd(item);
    };
    RoleComponent = tslib_1.__decorate([
        Component({
            selector: 'app-role',
            templateUrl: './role.component.html',
            styleUrls: ['./role.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [RoleService,
            RoleCtlService,
            ToastrService, ActivatedRoute, Router])
    ], RoleComponent);
    return RoleComponent;
}());
export { RoleComponent };
//# sourceMappingURL=role.component.js.map