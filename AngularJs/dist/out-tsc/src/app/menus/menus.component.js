import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var MenusComponent = /** @class */ (function () {
    function MenusComponent(router) {
        this.router = router;
    }
    MenusComponent.prototype.ngOnInit = function () {
    };
    MenusComponent.prototype.onLogout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/user/login']);
    };
    MenusComponent = tslib_1.__decorate([
        Component({
            selector: 'app-menus',
            templateUrl: './menus.component.html',
            styleUrls: ['./menus.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], MenusComponent);
    return MenusComponent;
}());
export { MenusComponent };
//# sourceMappingURL=menus.component.js.map