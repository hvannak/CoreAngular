import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.service.formModel.reset();
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.register().subscribe(function (res) {
            if (res.Succeeded) {
                _this.service.formModel.reset();
                _this.toastr.success('New user created!', 'Registration successful.');
            }
            else {
                res.Errors.forEach(function (element) {
                    switch (element.Code) {
                        case 'DuplicateUserName':
                            _this.toastr.error('Username is already taken', 'Registration failed.');
                            break;
                        default:
                            _this.toastr.error(element.Description, 'Registration failed.');
                            break;
                    }
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    RegistrationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService, ToastrService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map