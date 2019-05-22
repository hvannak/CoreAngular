import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { RoleService } from './role.service';
var UserService = /** @class */ (function () {
    function UserService(roleService, fb, http) {
        this.roleService = roleService;
        this.fb = fb;
        this.http = http;
        this.rolesAdded = [];
        this.formModel = this.fb.group({
            UserName: ['', Validators.required],
            Email: ['', Validators.email],
            FullName: [''],
            Passwords: this.fb.group({
                Password: ['', [Validators.required, Validators.minLength(4)]],
                ConfirmPassword: ['', Validators.required]
            }, { validator: this.comparePasswords })
        });
        this.userroleModel = this.fb.group({
            UserId: [''],
            UserName: ['', Validators.required],
            Roles: ['']
        });
    }
    UserService.prototype.comparePasswords = function (fb) {
        var confirmPswrdCtrl = fb.get('ConfirmPassword');
        //passwordMismatch
        //confirmPswrdCtrl.errors={passwordMismatch:true}
        if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
            if (fb.get('Password').value != confirmPswrdCtrl.value)
                confirmPswrdCtrl.setErrors({ passwordMismatch: true });
            else
                confirmPswrdCtrl.setErrors(null);
        }
    };
    UserService.prototype.onDelete = function (item) {
        var index = this.rolesAdded.indexOf(item.Name);
        if (index > -1) {
            this.rolesAdded.splice(index, 1);
        }
    };
    UserService.prototype.onAdd = function (item) {
        var index = this.rolesAdded.indexOf(item.Name);
        if (index <= -1) {
            this.rolesAdded.push(item.Name);
        }
    };
    UserService.prototype.register = function () {
        var body = {
            UserName: this.formModel.value.UserName,
            Email: this.formModel.value.Email,
            FullName: this.formModel.value.FullName,
            Password: this.formModel.value.Passwords.Password
        };
        return this.http.post(environment.apiURL + '/ApplicationUser/Register', body);
    };
    UserService.prototype.putUser = function () {
        var body = {
            UserId: this.userroleModel.value.UserId,
            UserName: this.userroleModel.value.UserName,
            Roles: this.userroleModel.value.Roles
        };
        return this.http.put(environment.apiURL + '/Access/' + this.userroleModel.value.UserId, body);
    };
    UserService.prototype.login = function (formData) {
        return this.http.post(environment.apiURL + '/ApplicationUser/Login', formData);
    };
    UserService.prototype.getUserProfile = function () {
        return this.http.get(environment.apiURL + '/UserProfile');
    };
    UserService.prototype.getUserRoles = function () {
        return this.http.get(environment.apiURL + '/Access').toPromise();
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(environment.apiURL + "/ApplicationUser").toPromise();
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(environment.apiURL + '/Access/' + id).toPromise();
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [RoleService, FormBuilder, HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map