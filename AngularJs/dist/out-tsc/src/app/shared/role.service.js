import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var RoleService = /** @class */ (function () {
    function RoleService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rolesAdded = [];
        this.selectedCtl = [];
        this.formModel = this.fb.group({
            Id: [''],
            RoleName: ['', Validators.required],
            SelectedControllers: [''],
        });
    }
    RoleService.prototype.postRoles = function () {
        var body = {
            RoleName: this.formModel.value.RoleName,
            SelectedControllers: this.selectedCtl
        };
        console.log(this.selectedCtl);
        return this.http.post(environment.apiURL + '/ApplicationRole', body);
    };
    RoleService.prototype.putRoles = function () {
        var body = {
            Id: this.formModel.value.Id,
            RoleName: this.formModel.value.RoleName,
            SelectedControllers: this.selectedCtl
        };
        return this.http.put(environment.apiURL + '/ApplicationRole/' + this.formModel.value.Id, body);
    };
    RoleService.prototype.getRolesList = function () {
        return this.http.get(environment.apiURL + '/ApplicationRole').toPromise();
    };
    RoleService.prototype.getRoleByID = function (id) {
        return this.http.get(environment.apiURL + '/ApplicationRole/' + id).toPromise();
    };
    RoleService.prototype.deleteRole = function (id) {
        return this.http.delete(environment.apiURL + '/ApplicationRole/' + id).toPromise();
    };
    RoleService.prototype.onDelete = function (item) {
        var index = this.rolesAdded.indexOf(item.Id);
        if (index > -1) {
            this.rolesAdded.splice(index, 1);
            var indexctl = this.selectedCtl.indexOf(item);
            this.selectedCtl.splice(indexctl, 1);
        }
    };
    RoleService.prototype.onAdd = function (item) {
        var index = this.rolesAdded.indexOf(item.Id);
        if (index <= -1) {
            this.rolesAdded.push(item.Id);
            this.selectedCtl.push(item);
        }
    };
    RoleService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient])
    ], RoleService);
    return RoleService;
}());
export { RoleService };
//# sourceMappingURL=role.service.js.map