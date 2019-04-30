(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-details/payment-details.component */ "./src/app/payment-details/payment-details.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _orders_order_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders/order/order.component */ "./src/app/orders/order/order.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/roles/roles.component.ts");
/* harmony import */ var _roles_role_role_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./roles/role/role.component */ "./src/app/roles/role/role.component.ts");
/* harmony import */ var _userroles_userroles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./userroles/userroles.component */ "./src/app/userroles/userroles.component.ts");
/* harmony import */ var _error_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./error/forbidden/forbidden.component */ "./src/app/error/forbidden/forbidden.component.ts");















var routes = [
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], children: [
            { path: 'registration', component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
            { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] }
        ] },
    { path: 'error/403', component: _error_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_14__["ForbiddenComponent"] },
    { path: 'paymentcard', component: _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_3__["PaymentDetailsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'order', children: [
            { path: '', component: _orders_order_order_component__WEBPACK_IMPORTED_MODULE_5__["OrderComponent"] },
            { path: 'edit/:id', component: _orders_order_order_component__WEBPACK_IMPORTED_MODULE_5__["OrderComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] }
        ] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'roles', component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_11__["RolesComponent"] },
    { path: 'role', children: [
            { path: '', component: _roles_role_role_component__WEBPACK_IMPORTED_MODULE_12__["RoleComponent"] },
            { path: 'edit/:id', component: _roles_role_role_component__WEBPACK_IMPORTED_MODULE_12__["RoleComponent"] }
        ] },
    {
        path: 'userroles', component: _userroles_userroles_component__WEBPACK_IMPORTED_MODULE_13__["UserrolesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    },
    { path: '', redirectTo: '/user/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularJs';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menus_menus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menus/menus.component */ "./src/app/menus/menus.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payment-details/payment-details.component */ "./src/app/payment-details/payment-details.component.ts");
/* harmony import */ var _payment_details_payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./payment-details/payment-detail/payment-detail.component */ "./src/app/payment-details/payment-detail/payment-detail.component.ts");
/* harmony import */ var _payment_details_payment_detail_list_payment_detail_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payment-details/payment-detail-list/payment-detail-list.component */ "./src/app/payment-details/payment-detail-list/payment-detail-list.component.ts");
/* harmony import */ var _shared_payment_detail_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/payment-detail.service */ "./src/app/shared/payment-detail.service.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _orders_order_order_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./orders/order/order.component */ "./src/app/orders/order/order.component.ts");
/* harmony import */ var _orders_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./orders/order-items/order-items.component */ "./src/app/orders/order-items/order-items.component.ts");
/* harmony import */ var _shared_customer_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/customer.service */ "./src/app/shared/customer.service.ts");
/* harmony import */ var _shared_item_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/item.service */ "./src/app/shared/item.service.ts");
/* harmony import */ var _shared_order_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/order.service */ "./src/app/shared/order.service.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/roles/roles.component.ts");
/* harmony import */ var _roles_role_role_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./roles/role/role.component */ "./src/app/roles/role/role.component.ts");
/* harmony import */ var _roles_role_ctl_role_ctl_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./roles/role-ctl/role-ctl.component */ "./src/app/roles/role-ctl/role-ctl.component.ts");
/* harmony import */ var _shared_role_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/role.service */ "./src/app/shared/role.service.ts");
/* harmony import */ var _shared_role_ctl_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/role-ctl.service */ "./src/app/shared/role-ctl.service.ts");
/* harmony import */ var _userroles_userrole_userrole_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./userroles/userrole/userrole.component */ "./src/app/userroles/userrole/userrole.component.ts");
/* harmony import */ var _userroles_userrolelist_userrolelist_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./userroles/userrolelist/userrolelist.component */ "./src/app/userroles/userrolelist/userrolelist.component.ts");
/* harmony import */ var _userroles_userroles_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./userroles/userroles.component */ "./src/app/userroles/userroles.component.ts");
/* harmony import */ var _error_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./error/forbidden/forbidden.component */ "./src/app/error/forbidden/forbidden.component.ts");




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_11__["PaymentDetailsComponent"],
                _payment_details_payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_12__["PaymentDetailComponent"],
                _payment_details_payment_detail_list_payment_detail_list_component__WEBPACK_IMPORTED_MODULE_13__["PaymentDetailListComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_15__["OrdersComponent"],
                _orders_order_order_component__WEBPACK_IMPORTED_MODULE_16__["OrderComponent"],
                _orders_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_17__["OrderItemsComponent"],
                _menus_menus_component__WEBPACK_IMPORTED_MODULE_9__["MenusComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_21__["UserComponent"],
                _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_22__["RegistrationComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"],
                _roles_roles_component__WEBPACK_IMPORTED_MODULE_27__["RolesComponent"],
                _roles_role_role_component__WEBPACK_IMPORTED_MODULE_28__["RoleComponent"],
                _roles_role_ctl_role_ctl_component__WEBPACK_IMPORTED_MODULE_29__["RoleCtlComponent"],
                _userroles_userrole_userrole_component__WEBPACK_IMPORTED_MODULE_32__["UserroleComponent"],
                _userroles_userrolelist_userrolelist_component__WEBPACK_IMPORTED_MODULE_33__["UserrolelistComponent"],
                _userroles_userroles_component__WEBPACK_IMPORTED_MODULE_34__["UserrolesComponent"],
                _error_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_35__["ForbiddenComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
            ],
            entryComponents: [_orders_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_17__["OrderItemsComponent"]],
            providers: [_shared_payment_detail_service__WEBPACK_IMPORTED_MODULE_14__["PaymentDetailService"], _shared_customer_service__WEBPACK_IMPORTED_MODULE_18__["CustomerService"], _shared_item_service__WEBPACK_IMPORTED_MODULE_19__["ItemService"],
                _shared_order_service__WEBPACK_IMPORTED_MODULE_20__["OrderService"], _shared_user_service__WEBPACK_IMPORTED_MODULE_23__["UserService"],
                _shared_role_service__WEBPACK_IMPORTED_MODULE_30__["RoleService"], _shared_role_ctl_service__WEBPACK_IMPORTED_MODULE_31__["RoleCtlService"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_26__["AuthInterceptor"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token') != null)
            return true;
        else {
            this.router.navigate(['/user/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (localStorage.getItem('token') != null) {
            var clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (succ) { }, function (err) {
                if (err.status == 401) {
                    localStorage.removeItem('token');
                    _this.router.navigateByUrl('/user/login');
                }
                else if (err.status == 403) {
                    _this.router.navigateByUrl('/error/403');
                }
            }));
        }
        else
            return next.handle(req.clone());
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/error/forbidden/forbidden.component.css":
/*!*********************************************************!*\
  !*** ./src/app/error/forbidden/forbidden.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2ZvcmJpZGRlbi9mb3JiaWRkZW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/error/forbidden/forbidden.component.html":
/*!**********************************************************!*\
  !*** ./src/app/error/forbidden/forbidden.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menus></app-menus>\n<div class=\"col-md-8 offset-md-5\">\n  <i class=\"fas fa-blind fa-10x\"></i>403 Forbidden\n</div>"

/***/ }),

/***/ "./src/app/error/forbidden/forbidden.component.ts":
/*!********************************************************!*\
  !*** ./src/app/error/forbidden/forbidden.component.ts ***!
  \********************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForbiddenComponent = /** @class */ (function () {
    function ForbiddenComponent() {
    }
    ForbiddenComponent.prototype.ngOnInit = function () {
    };
    ForbiddenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forbidden',
            template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/error/forbidden/forbidden.component.html"),
            styles: [__webpack_require__(/*! ./forbidden.component.css */ "./src/app/error/forbidden/forbidden.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForbiddenComponent);
    return ForbiddenComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menus></app-menus>\n<div class=\"card m-5\" style=\"width:18rem\" *ngIf=\"userDetails\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\"><strong>Username : </strong>{{userDetails.UserName}}</li>\n    <li class=\"list-group-item\"><strong>FullName : </strong>{{userDetails.FullName}}</li>\n    <li class=\"list-group-item\"><strong>Email : </strong>{{userDetails.Email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"]
            ],
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["A11yModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/menus/menus.component.css":
/*!*******************************************!*\
  !*** ./src/app/menus/menus.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudXMvbWVudXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSwwQ0FBMEM7O0FBQzFDOzs7SUFHSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQSx5RUFBeUU7O0FBQ3pFO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlFQUFpRTtJQUNqRTtRQUNJLFlBQVk7UUFDWix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLFdBQVc7SUFDZjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksbURBQW1EO1FBQ25ELFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtJQUMzQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWVudXMvbWVudXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIC5nbHlwaGljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXHJcbmxpLmxpbmstYWN0aXZlIGEsXHJcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXHJcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cclxuLm1haW4tbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXHJcbiAgICAubWFpbi1uYXYge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcclxuICAgIH1cclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIHVsIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgbGkge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBtYXJnaW46IDZweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgbGkgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgYSB7XHJcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/menus/menus.component.html":
/*!********************************************!*\
  !*** ./src/app/menus/menus.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>  \n  <mat-toolbar-row>\n    <span>MEDIVETGROUP</span>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\" >\n      <mat-icon>more_vert</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\" >\n      <button mat-menu-item routerLink=\"/user/login\">\n        <mat-icon>voicemail</mat-icon>\n        <span>Log In</span>\n      </button>\n      <button mat-menu-item (click)=\"onLogout()\">\n        <mat-icon>home</mat-icon>\n        <span>Logout</span>\n      </button>\n      <button mat-menu-item routerLink=\"/user/registration\">\n        <mat-icon><i class=\"fas fa-user-plus\"></i></mat-icon>\n        <span>Register</span>\n      </button>\n      <button mat-menu-item routerLink=\"/userroles\">\n        <mat-icon><i class=\"fas fa-users-cog\"></i></mat-icon>\n        <span>User Setting</span>\n      </button>\n      <button mat-menu-item routerLink=\"/roles\">\n        <mat-icon><i class=\"fas fa-pencil-ruler\"></i></mat-icon>\n        <span>Roles Setting</span>\n      </button>\n      <button mat-menu-item routerLink=\"/paymentcard\">\n        <mat-icon>dialpad</mat-icon>\n        <span>Payment Card</span> \n      </button>\n    </mat-menu>\n    <button mat-icon-button [matMenuTriggerFor]=\"menupr\" >\n      <mat-icon><i class=\"fab fa-accusoft\"></i></mat-icon>\n    </button>\n    <mat-menu #menupr=\"matMenu\" >\n      <button mat-menu-item routerLink=\"/orders\">\n        <mat-icon><i class=\"fas fa-sort-amount-up\"></i></mat-icon>\n        <span>Orders</span> \n      </button>\n    </mat-menu>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n"

/***/ }),

/***/ "./src/app/menus/menus.component.ts":
/*!******************************************!*\
  !*** ./src/app/menus/menus.component.ts ***!
  \******************************************/
/*! exports provided: MenusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusComponent", function() { return MenusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



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
    MenusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menus',
            template: __webpack_require__(/*! ./menus.component.html */ "./src/app/menus/menus.component.html"),
            styles: [__webpack_require__(/*! ./menus.component.css */ "./src/app/menus/menus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenusComponent);
    return MenusComponent;
}());



/***/ }),

/***/ "./src/app/orders/order-items/order-items.component.css":
/*!**************************************************************!*\
  !*** ./src/app/orders/order-items/order-items.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci1pdGVtcy9vcmRlci1pdGVtcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/orders/order-items/order-items.component.html":
/*!***************************************************************!*\
  !*** ./src/app/orders/order-items/order-items.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"dispaly-4\">Order Food Item</h4>\n<hr>\n<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n    \n    <input type=\"hidden\" name=\"OrderItemId\" [value]=\"formData.OrderItemId\">\n    <input type=\"hidden\"  name=\"OrderId\" #OrderId=\"ngModel\" [(ngModel)]=\"formData.OrderId\">\n  <input type=\"hidden\"  name=\"ItemName\" #ItemName=\"ngModel\" [(ngModel)]=\"formData.ItemName\">\n  <div class=\"form-group\">\n    <label>Food Item</label>\n    <select name=\"InventoryId\" #InventoryId=\"ngModel\" [(ngModel)]=\"formData.InventoryId\" class=\"form-control\" (change)=\"updatePrice($event.target)\"\n    [class.is-invalid]=\"!isValid && formData.InventoryId==0\">\n      <option value=\"0\">-Select-</option>\n      <option *ngFor=\"let item of itemList\" value=\"{{item.InventoryId}}\">{{item.InventoryDesr}}</option>\n    </select>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label>Price</label>\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">$</div>\n        </div>\n        <input name=\"Price\" #Price=\"ngModel\" [(ngModel)]=\"formData.Price\" class=\"form-control\" readonly>\n      </div>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label>Quantity</label>\n      <input name=\"Quantity\" #Quantity=\"ngModel\" [(ngModel)]=\"formData.Quantity\" class=\"form-control\"\n      (keyup)=\"updateTotal()\" [class.is-invalid]=\"!isValid && formData.Quantity==0\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Total</label>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <div class=\"input-group-text\">$</div>\n      </div>\n      <input name=\"Total\" #Total=\"ngModel\" [(ngModel)]=\"formData.Total\" class=\"form-control\" readonly>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> Submit</button>\n    <button type=\"button\" class=\"btn btn-outline-dark ml-1\" [mat-dialog-close]><i class=\"fa fa-close\"></i> Close</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/orders/order-items/order-items.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/orders/order-items/order-items.component.ts ***!
  \*************************************************************/
/*! exports provided: OrderItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemsComponent", function() { return OrderItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/item.service */ "./src/app/shared/item.service.ts");
/* harmony import */ var src_app_shared_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/order.service */ "./src/app/shared/order.service.ts");





var OrderItemsComponent = /** @class */ (function () {
    function OrderItemsComponent(data, dialogRef, itemService, orderSevice) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.itemService = itemService;
        this.orderSevice = orderSevice;
        this.isValid = true;
    }
    OrderItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItemList().then(function (res) { return _this.itemList = res; });
        if (this.data.orderItemIndex == null)
            this.formData = {
                OrderItemId: 0,
                OrderId: this.data.OrderId,
                InventoryId: 0,
                ItemName: '',
                Price: 0,
                Quantity: 0,
                Total: 0
            };
        else
            this.formData = Object.assign({}, this.orderSevice.orderItems[this.data.orderItemIndex]);
    };
    OrderItemsComponent.prototype.updatePrice = function (ctrl) {
        if (ctrl.selectedIndex == 0) {
            this.formData.Price = 0;
            this.formData.ItemName = '';
        }
        else {
            this.formData.Price = this.itemList[ctrl.selectedIndex - 1].Price;
            this.formData.ItemName = this.itemList[ctrl.selectedIndex - 1].InventoryDesr;
        }
        this.updateTotal();
    };
    OrderItemsComponent.prototype.updateTotal = function () {
        this.formData.Total = parseFloat((this.formData.Quantity * this.formData.Price).toFixed(2));
    };
    OrderItemsComponent.prototype.onSubmit = function (form) {
        if (this.validateForm(form.value)) {
            if (this.data.orderItemIndex == null)
                this.orderSevice.orderItems.push(form.value);
            else
                this.orderSevice.orderItems[this.data.orderItemIndex] = form.value;
            this.dialogRef.close();
        }
    };
    OrderItemsComponent.prototype.validateForm = function (formData) {
        this.isValid = true;
        if (formData.InventoryId == 0)
            this.isValid = false;
        else if (formData.Quantity == 0)
            this.isValid = false;
        return this.isValid;
    };
    OrderItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-items',
            template: __webpack_require__(/*! ./order-items.component.html */ "./src/app/orders/order-items/order-items.component.html"),
            styles: [__webpack_require__(/*! ./order-items.component.css */ "./src/app/orders/order-items/order-items.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_shared_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            src_app_shared_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]])
    ], OrderItemsComponent);
    return OrderItemsComponent;
}());



/***/ }),

/***/ "./src/app/orders/order/order.component.css":
/*!**************************************************!*\
  !*** ./src/app/orders/order/order.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/orders/order/order.component.html":
/*!***************************************************!*\
  !*** ./src/app/orders/order/order.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menus></app-menus>\n<div class=\"jumbotron\">\n  <h1 class=\"display-4 text-center\">Orders Register</h1>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form #form=\"ngForm\" autocomplete=\"off\" *ngIf=\"service.formData\" (submit)=\"onSubmit(form)\">\n        <input type=\"hidden\" name=\"OrderId\" [value]=\"service.formData.OrderId\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Order No.</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">#</div>\n                </div>\n                <input name=\"OrderNo\" #OrderNo=\"ngModel\" [(ngModel)]=\"service.formData.OrderNo\" class=\"form-control\" readonly>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label>Customer</label>\n              <select name=\"CustomerId\" #CustomerId=\"ngModel\" [(ngModel)]=\"service.formData.CustomerId\" class=\"form-control\"\n              [class.is-invalid]=\"!isValid && service.formData.CustomerId==0\">\n                <option value=\"0\">-Select-</option>\n                <option *ngFor=\"let item of customerList\" value=\"{{item.CustomerId}}\">{{item.CustomerName}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Payment Method</label>\n              <select name=\"PMethod\" #PMethod=\"ngModel\" [(ngModel)]=\"service.formData.PMethod\" class=\"form-control\">\n                <option value=\"\">-Select-</option>\n                <option value=\"Cash\">Cash</option>\n                <option value=\"Card\">Card</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label>Grand Total</label>\n\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">$</div>\n                </div>\n                <input name=\"GTotal\" #GTotal=\"ngModel\" [(ngModel)]=\"service.formData.GTotal\" class=\"form-control\" readonly>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- order items table-->\n        <table class=\"table table-borderless\">\n          <thead class=\"thead-light\">\n            <th>Food</th>\n            <th>Price</th>\n            <th>Quantity</th>\n            <th>Total</th>\n            <th>\n              <a class=\"btn btn-sm btn-success text-white\" (click)=\"AddOrEditOrderItem(null,service.formData.OrderId)\"><i class=\"fa fa-plus\"></i> Add Item</a>\n            </th>\n          </thead>\n          <tbody>\n            <tr *ngIf=\"service.orderItems.length==0\" [class.text-danger]=\"!isValid && service.orderItems.length==0\">\n              <td class=\"font-italic text-center\" colspan=\"5\">\n                No food item selected for this order.\n              </td>\n            </tr>\n\n            <tr *ngFor=\"let item of service.orderItems;let i=index;\">\n              <td>{{item.ItemName}}</td>\n              <td>{{item.Price}}</td>\n              <td>{{item.Quantity}}</td>\n              <td>{{item.Total}}</td>\n              <td>\n                <a class=\"btn btn-sm btn-info text-white\" (click)=\"AddOrEditOrderItem(i,service.formData.OrderId)\"><i class=\"fas fa-pencil-alt\"></i></a>\n                <a class=\"btn btn-sm btn-danger text-white ml-1\" (click)=\"onDeleteOrderItem(item.OrderItemId,i)\"><i class=\"fa fa-trash\"></i></a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> Submit</button>\n          <a class=\"btn btn-outline-dark ml-1\" routerLink=\"/orders\"><i class=\"fa fa-table\"></i> View Orders</a>\n        </div>\n      </form>\n  \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/orders/order/order.component.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/order/order.component.ts ***!
  \*************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/customer.service */ "./src/app/shared/customer.service.ts");
/* harmony import */ var _shared_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/order.service */ "./src/app/shared/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-items/order-items.component */ "./src/app/orders/order-items/order-items.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var OrderComponent = /** @class */ (function () {
    function OrderComponent(service, dialog, customerService, toastr, router, currentRoute) {
        this.service = service;
        this.dialog = dialog;
        this.customerService = customerService;
        this.toastr = toastr;
        this.router = router;
        this.currentRoute = currentRoute;
        this.isValid = true;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var orderId = this.currentRoute.snapshot.paramMap.get('id');
        if (orderId == null)
            this.resetForm();
        else {
            this.service.getOrderByID(parseInt(orderId)).then(function (res) {
                _this.service.formData = res.orders;
                _this.service.orderItems = res.orderlines;
            });
        }
        this.customerService.getCustomerList().then(function (res) { return _this.customerList = res; });
    };
    OrderComponent.prototype.resetForm = function (form) {
        if (form = null)
            form.resetForm();
        this.service.formData = {
            OrderId: 0,
            OrderNo: Math.floor(100000 + Math.random() * 900000).toString(),
            CustomerId: 0,
            PMethod: '',
            GTotal: 0,
            DeletedOrderItemIDs: ''
        };
        this.service.orderItems = [];
    };
    OrderComponent.prototype.AddOrEditOrderItem = function (orderItemIndex, OrderId) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = "50%";
        dialogConfig.data = { orderItemIndex: orderItemIndex, OrderId: OrderId };
        this.dialog.open(_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_5__["OrderItemsComponent"], dialogConfig).afterClosed().subscribe(function (res) {
            _this.updateGrandTotal();
        });
    };
    OrderComponent.prototype.onDeleteOrderItem = function (orderItemID, i) {
        if (orderItemID != null)
            this.service.formData.DeletedOrderItemIDs += orderItemID + ",";
        this.service.orderItems.splice(i, 1);
        this.updateGrandTotal();
    };
    OrderComponent.prototype.updateGrandTotal = function () {
        this.service.formData.GTotal = this.service.orderItems.reduce(function (prev, curr) {
            return prev + curr.Total;
        }, 0);
        this.service.formData.GTotal = parseFloat(this.service.formData.GTotal.toFixed(2));
    };
    OrderComponent.prototype.validateForm = function () {
        this.isValid = true;
        if (this.service.formData.CustomerId == 0)
            this.isValid = false;
        else if (this.service.orderItems.length == 0)
            this.isValid = false;
        return this.isValid;
    };
    OrderComponent.prototype.onSubmit = function (form) {
        if (this.service.formData.OrderId == 0) {
            this.insertRecord(form);
        }
        else {
            this.updateRecord(form);
        }
    };
    OrderComponent.prototype.insertRecord = function (form) {
        var _this = this;
        if (this.validateForm()) {
            this.service.postOrders().subscribe(function (res) {
                _this.resetForm();
                _this.toastr.success('Submitted Successfully', 'Restaurent App.');
                _this.router.navigate(['/orders']);
            });
        }
    };
    OrderComponent.prototype.updateRecord = function (form) {
        var _this = this;
        if (this.validateForm()) {
            this.service.putOrders().subscribe(function (res) {
                _this.resetForm();
                _this.toastr.success('Submitted Successfully', 'Restaurent App.');
                _this.router.navigate(['/orders']);
            });
        }
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/orders/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/orders/order/order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _shared_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menus></app-menus>\n<div class=\"jumbotron\">\n  <h1 class=\"display-4 text-center\">Orders Register</h1>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-hover\">\n        <thead class=\"thead-light\">\n          <th>#Order No.</th>\n          <th>Customer</th>\n          <th>P. Method</th>\n          <th>G. Total</th>\n          <th>\n            <a class=\"btn btn-outline-success\" routerLink=\"/order\"><i class=\"fa fa-plus-square\"></i> Create New</a>\n          </th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of orderList\">\n            <th (click)=\"openForEdit(item.OrderId)\">{{item.OrderNo}}</th>\n            <td (click)=\"openForEdit(item.OrderId)\">{{item.Customer}}</td>\n            <td (click)=\"openForEdit(item.OrderId)\">{{item.PMethod}}</td>\n            <td (click)=\"openForEdit(item.OrderId)\">{{item.GTotal}}</td>\n            <td>\n                <a class=\"btn text-danger\" (click)=\"onOrderDelete(item.OrderId)\"><i class=\"fa fa-trash fa-lg\"></i></a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/order.service */ "./src/app/shared/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.refreshList();
    };
    OrdersComponent.prototype.refreshList = function () {
        var _this = this;
        this.service.getOrderList().then(function (res) { return _this.orderList = res; });
    };
    OrdersComponent.prototype.openForEdit = function (orderId) {
        this.router.navigate(['/order/edit/' + orderId]);
    };
    OrdersComponent.prototype.onOrderDelete = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.service.deleteOrder(id).then(function (res) {
                _this.refreshList();
                _this.toastr.warning("Deleted Successfully", "Restaurent App.");
            });
        }
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/payment-details/payment-detail-list/payment-detail-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/payment-details/payment-detail-list/payment-detail-list.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWRldGFpbC1saXN0L3BheW1lbnQtZGV0YWlsLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/payment-details/payment-detail-list/payment-detail-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/payment-details/payment-detail-list/payment-detail-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <tr *ngFor=\"let pd of service.list\">\n    <td (click)=\"populateForm(pd)\">{{pd.CardOwnerName}}</td>\n    <td (click)=\"populateForm(pd)\">{{pd.CardNumber}}</td>\n    <td (click)=\"populateForm(pd)\">{{pd.ExpirationDate}}</td>\n    <td (click)=\"populateForm(pd)\">{{pd.CVV}}</td>\n    <td>\n      <i class=\"fa fa-trash-alt fa-lg text-danger\" (click)=\"onDelete(pd.PMId)\"></i>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/payment-details/payment-detail-list/payment-detail-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/payment-details/payment-detail-list/payment-detail-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PaymentDetailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailListComponent", function() { return PaymentDetailListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_payment_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/payment-detail.service */ "./src/app/shared/payment-detail.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var PaymentDetailListComponent = /** @class */ (function () {
    function PaymentDetailListComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    PaymentDetailListComponent.prototype.ngOnInit = function () {
        this.service.refressList();
    };
    PaymentDetailListComponent.prototype.populateForm = function (pd) {
        this.service.formData = Object.assign({}, pd);
    };
    PaymentDetailListComponent.prototype.onDelete = function (PMId) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.service.DeletePaymentDetail(PMId).subscribe(function (res) {
                _this.service.refressList();
                _this.toastr.warning("Deleted successfully", "Payment Detail Register");
            }, function (err) {
                console.log(err);
            });
        }
    };
    PaymentDetailListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-detail-list',
            template: __webpack_require__(/*! ./payment-detail-list.component.html */ "./src/app/payment-details/payment-detail-list/payment-detail-list.component.html"),
            styles: [__webpack_require__(/*! ./payment-detail-list.component.css */ "./src/app/payment-details/payment-detail-list/payment-detail-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_payment_detail_service__WEBPACK_IMPORTED_MODULE_2__["PaymentDetailService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], PaymentDetailListComponent);
    return PaymentDetailListComponent;
}());



/***/ }),

/***/ "./src/app/payment-details/payment-detail/payment-detail.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/payment-details/payment-detail/payment-detail.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWRldGFpbC9wYXltZW50LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/payment-details/payment-detail/payment-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/payment-details/payment-detail/payment-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n  <input type=\"hidden\" name=\"PMId\" [value]=\"service.formData.PMId\">\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <div class=\"input-group-text bg-white\">\n            <i class=\"fas fa-user-circle\" [class.green-icon]=\"CardOwnerName.valid\" [class.red-icon]=\"CardOwnerName.invalid\"></i>\n        </div>\n      </div>\n      <input name=\"CardOwnerName\" #CardOwnerName=\"ngModel\" [(ngModel)]=\"service.formData.CardOwnerName\" class=\"form-control\" placeholder=\"Card Owner Name\" required>\n    </div>\n  </div>\n  <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-credit-card\" [class.green-icon]=\"CardNumber.valid\" [class.red-icon]=\"CardNumber.invalid\"></i>\n          </div>\n        </div>\n        <input name=\"CardNumber\" #CardNumber=\"ngModel\" [(ngModel)]=\"service.formData.CardNumber\" class=\"form-control\" placeholder=\"Card Number\" required maxlength=\"16\" minlength=\"16\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n    <div class=\"form-group col-md-7\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n                <i class=\"fas fa-calendar-alt\" [class.green-icon]=\"ExpirationDate.valid\" [class.red-icon]=\"ExpirationDate.invalid\"></i>\n            </div>\n          </div>\n          <input name=\"ExpirationDate\" #ExpirationDate=\"ngModel\" [(ngModel)]=\"service.formData.ExpirationDate\" class=\"form-control\" placeholder=\"MM/YY\" required required maxlength=\"5\" minlength=\"5\">\n        </div>\n      </div>\n      <div class=\"form-group col-md-5\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n                <i class=\"fas fa-key\" [class.green-icon]=\"CVV.valid\" [class.red-icon]=\"CVV.invalid\"></i>\n            </div>\n          </div>\n          <input type=\"password\" name=\"CVV\" #CVV=\"ngModel\" [(ngModel)]=\"service.formData.CVV\" class=\"form-control\" placeholder=\"CVV\" required required maxlength=\"3\" minlength=\"3\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"form.invalid\"><i class=\"fas fa-database\"></i>Submit</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/payment-details/payment-detail/payment-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/payment-details/payment-detail/payment-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: PaymentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailComponent", function() { return PaymentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_payment_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/payment-detail.service */ "./src/app/shared/payment-detail.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var PaymentDetailComponent = /** @class */ (function () {
    function PaymentDetailComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    PaymentDetailComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    PaymentDetailComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            PMId: 0,
            CardOwnerName: '',
            CardNumber: '',
            ExpirationDate: '',
            CVV: ''
        };
    };
    PaymentDetailComponent.prototype.onSubmit = function (form) {
        if (this.service.formData.PMId == 0) {
            this.insertRecord(form);
        }
        else {
            this.updateRecord(form);
        }
    };
    PaymentDetailComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this.service.postPaymentDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.success("Submited successfully", "Payment Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    PaymentDetailComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this.service.PutPaymentDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.info("Submited successfully", "Payment Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    PaymentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-detail',
            template: __webpack_require__(/*! ./payment-detail.component.html */ "./src/app/payment-details/payment-detail/payment-detail.component.html"),
            styles: [__webpack_require__(/*! ./payment-detail.component.css */ "./src/app/payment-details/payment-detail/payment-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_payment_detail_service__WEBPACK_IMPORTED_MODULE_2__["PaymentDetailService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], PaymentDetailComponent);
    return PaymentDetailComponent;
}());



/***/ }),

/***/ "./src/app/payment-details/payment-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/payment-details/payment-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/payment-details/payment-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/payment-details/payment-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menus></app-menus>\n<div class=\"jumbotron\">\n  <h1 class=\"display-4 text-center\">Payment Detail Register</h1>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <app-payment-detail></app-payment-detail>\n    </div>\n    <div class=\"col-md-8\">\n      <app-payment-detail-list></app-payment-detail-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/payment-details/payment-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/payment-details/payment-details.component.ts ***!
  \**************************************************************/
/*! exports provided: PaymentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsComponent", function() { return PaymentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentDetailsComponent = /** @class */ (function () {
    function PaymentDetailsComponent() {
    }
    PaymentDetailsComponent.prototype.ngOnInit = function () {
    };
    PaymentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-details',
            template: __webpack_require__(/*! ./payment-details.component.html */ "./src/app/payment-details/payment-details.component.html"),
            styles: [__webpack_require__(/*! ./payment-details.component.css */ "./src/app/payment-details/payment-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaymentDetailsComponent);
    return PaymentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/roles/role-ctl/role-ctl.component.css":
/*!*******************************************************!*\
  !*** ./src/app/roles/role-ctl/role-ctl.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3JvbGUtY3RsL3JvbGUtY3RsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/roles/role-ctl/role-ctl.component.html":
/*!********************************************************!*\
  !*** ./src/app/roles/role-ctl/role-ctl.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  role-ctl works!\n</p>\n"

/***/ }),

/***/ "./src/app/roles/role-ctl/role-ctl.component.ts":
/*!******************************************************!*\
  !*** ./src/app/roles/role-ctl/role-ctl.component.ts ***!
  \******************************************************/
/*! exports provided: RoleCtlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleCtlComponent", function() { return RoleCtlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoleCtlComponent = /** @class */ (function () {
    function RoleCtlComponent() {
    }
    RoleCtlComponent.prototype.ngOnInit = function () {
    };
    RoleCtlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-ctl',
            template: __webpack_require__(/*! ./role-ctl.component.html */ "./src/app/roles/role-ctl/role-ctl.component.html"),
            styles: [__webpack_require__(/*! ./role-ctl.component.css */ "./src/app/roles/role-ctl/role-ctl.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RoleCtlComponent);
    return RoleCtlComponent;
}());



/***/ }),

/***/ "./src/app/roles/role/role.component.css":
/*!***********************************************!*\
  !*** ./src/app/roles/role/role.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3JvbGUvcm9sZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/roles/role/role.component.html":
/*!************************************************!*\
  !*** ./src/app/roles/role/role.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menus></app-menus>\n<div class=\"container\">\n  <div class=\"col-md-12\">\n      <div class=\"jumbotron\">\n          <h1 class=\"display-4 text-center\"><i class=\"fas fa-toilet-paper\"></i>Roles Management</h1>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n              <form [formGroup]=\"service.formModel\" autocomplete=\"off\" (submit)=\"onSubmit()\">\n                  <div class=\"form-group\">\n                    <input hidden class=\"form-control\" formControlName=\"Id\">\n                  </div>\n                  <div class=\"form-group required\">\n                    <label>RoleName</label>\n                    <input class=\"form-control\" formControlName=\"RoleName\">\n                    <label class=\"text-danger\" *ngIf=\"service.formModel.get('RoleName').touched && service.formModel.get('RoleName').errors?.required\">This field is mandatory.</label>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-md-8 offset-md-2\">\n                      <button type=\"submit\" class=\"btn btn-lg btn-block\" [disabled]=\"!service.formModel.valid\">Submit</button>\n                    </div>\n                  </div>\n                </form>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Access List</label>                     \n                        <table class=\"table table-hover\">\n                          <tr *ngFor=\"let item of ctlList\">\n                            <td>{{item.Id}}</td>\n                            <td width=\"5%\"><i class=\"fas fa-minus\" (click)=\"onDelete(item)\"></i></td>\n                            <td width=\"5%\"><i class=\"fas fa-plus\" (click)=\"onAdd(item)\"></i></td>\n                          </tr>\n                        </table>\n                      </div> \n                  </div>\n                  <div class=\"col-md-6\">\n                    <table class=\"table table-hover\">\n                      <tr *ngFor=\"let item of service.rolesAdded\">\n                        <td>{{item}}</td>\n                      </tr>\n                    </table>\n                  </div>\n                </div>\n \n\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/roles/role/role.component.ts":
/*!**********************************************!*\
  !*** ./src/app/roles/role/role.component.ts ***!
  \**********************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/role.service */ "./src/app/shared/role.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_role_ctl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/role-ctl.service */ "./src/app/shared/role-ctl.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






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
        }
        else {
            this.service.getRoleByID(roleId).then(function (res) {
                _this.roleList = res;
                _this.service.formModel.patchValue({
                    Id: _this.roleList.Id,
                    RoleName: _this.roleList.Name,
                });
                if (_this.roleList.Access != null) {
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
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/roles/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/roles/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"],
            src_app_shared_role_ctl_service__WEBPACK_IMPORTED_MODULE_4__["RoleCtlService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/roles/roles.component.css":
/*!*******************************************!*\
  !*** ./src/app/roles/roles.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/roles/roles.component.html":
/*!********************************************!*\
  !*** ./src/app/roles/roles.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menus></app-menus>\n<div class=\"jumbotron\">\n  <h1 class=\"display-4 text-center\">Roles Register</h1>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-hover\">\n        <thead class=\"thead-light\">\n          <th>Name</th>\n          <th>Access</th>\n          <th>\n            <a class=\"btn btn-outline-success\" routerLink=\"/role\"><i class=\"fa fa-plus-square\"></i> Create New</a>\n          </th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of roleList\">\n            <td (click)=\"openForEdit(item.Id)\">{{item.Name}}</td>\n            <td (click)=\"openForEdit(item.Id)\">{{item.Access}}</td>\n            <td>\n                <a class=\"btn text-danger\" (click)=\"onRoleDelete(item.Id)\"><i class=\"fa fa-trash fa-lg\"></i></a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/roles/roles.component.ts":
/*!******************************************!*\
  !*** ./src/app/roles/roles.component.ts ***!
  \******************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/role.service */ "./src/app/shared/role.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





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
    RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roles',
            template: __webpack_require__(/*! ./roles.component.html */ "./src/app/roles/roles.component.html"),
            styles: [__webpack_require__(/*! ./roles.component.css */ "./src/app/roles/roles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/shared/customer.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/customer.service.ts ***!
  \********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.getCustomerList = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/Customers').toPromise();
    };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/shared/item.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/item.service.ts ***!
  \****************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService.prototype.getItemList = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/Inventorys').toPromise();
    };
    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/app/shared/order.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/order.service.ts ***!
  \*****************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.saveOrUpdateOrder = function () {
        var body = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.formData, { OrderLines: this.orderItems });
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/Orders', body);
    };
    OrderService.prototype.postOrders = function () {
        var body = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.formData, { OrderLines: this.orderItems });
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/Orders', body);
    };
    OrderService.prototype.putOrders = function () {
        var body = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.formData, { OrderLines: this.orderItems });
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/Orders/' + this.formData.OrderId, body);
    };
    OrderService.prototype.getOrderList = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/Orders').toPromise();
    };
    OrderService.prototype.getOrderByID = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/Orders/' + id).toPromise();
    };
    OrderService.prototype.deleteOrder = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/Orders/' + id).toPromise();
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/shared/payment-detail.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/payment-detail.service.ts ***!
  \**************************************************/
/*! exports provided: PaymentDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailService", function() { return PaymentDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var PaymentDetailService = /** @class */ (function () {
    function PaymentDetailService(http) {
        this.http = http;
    }
    PaymentDetailService.prototype.postPaymentDetail = function () {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/PaymentDetail", this.formData);
    };
    PaymentDetailService.prototype.PutPaymentDetail = function () {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/PaymentDetail/" + this.formData.PMId, this.formData);
    };
    PaymentDetailService.prototype.DeletePaymentDetail = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/PaymentDetail/" + id);
    };
    PaymentDetailService.prototype.refressList = function () {
        var _this = this;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/PaymentDetail")
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    PaymentDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PaymentDetailService);
    return PaymentDetailService;
}());



/***/ }),

/***/ "./src/app/shared/role-ctl.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/role-ctl.service.ts ***!
  \********************************************/
/*! exports provided: RoleCtlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleCtlService", function() { return RoleCtlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var RoleCtlService = /** @class */ (function () {
    function RoleCtlService(http) {
        this.http = http;
    }
    RoleCtlService.prototype.getTreeList = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/CtlDiscovery').toPromise();
    };
    RoleCtlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RoleCtlService);
    return RoleCtlService;
}());



/***/ }),

/***/ "./src/app/shared/role.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/role.service.ts ***!
  \****************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var RoleService = /** @class */ (function () {
    function RoleService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rolesAdded = [];
        this.selectedCtl = [];
        this.formModel = this.fb.group({
            Id: [''],
            RoleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SelectedControllers: [''],
        });
    }
    RoleService.prototype.postRoles = function () {
        var body = {
            RoleName: this.formModel.value.RoleName,
            SelectedControllers: this.selectedCtl
        };
        console.log(this.selectedCtl);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/ApplicationRole', body);
    };
    RoleService.prototype.putRoles = function () {
        var body = {
            Id: this.formModel.value.Id,
            RoleName: this.formModel.value.RoleName,
            SelectedControllers: this.selectedCtl
        };
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/ApplicationRole/' + this.formModel.value.Id, body);
    };
    RoleService.prototype.getRolesList = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/ApplicationRole').toPromise();
    };
    RoleService.prototype.getRoleByID = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/ApplicationRole/' + id).toPromise();
    };
    RoleService.prototype.deleteRole = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/ApplicationRole/' + id).toPromise();
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
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role.service */ "./src/app/shared/role.service.ts");






var UserService = /** @class */ (function () {
    function UserService(roleService, fb, http) {
        this.roleService = roleService;
        this.fb = fb;
        this.http = http;
        this.rolesAdded = [];
        this.formModel = this.fb.group({
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            FullName: [''],
            Passwords: this.fb.group({
                Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }, { validator: this.comparePasswords })
        });
        this.userroleModel = this.fb.group({
            UserId: [''],
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Roles: ['']
        });
        this.getRoles();
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
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/ApplicationUser/Register', body);
    };
    UserService.prototype.putUser = function () {
        var body = {
            UserId: this.userroleModel.value.UserId,
            UserName: this.userroleModel.value.UserName,
            Roles: this.userroleModel.value.Roles
        };
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/Access/' + this.userroleModel.value.UserId, body);
    };
    UserService.prototype.login = function (formData) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/ApplicationUser/Login', formData);
    };
    UserService.prototype.getUserProfile = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/UserProfile');
    };
    UserService.prototype.getUserRoles = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/Access').toPromise();
    };
    UserService.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getRolesList().then(function (res) { return _this.rolesList = res; });
        ;
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/Access/' + id).toPromise();
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-md-8 offset-md-2\">\n      <div class=\"jumbotron\">\n        <h1 class=\"display-4 text-center\"><i class=\"fas fa-chalkboard-teacher\"></i>Login</h1>\n      <hr>\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n          <form #form='ngForm' autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n              <div class=\"form-group\">\n                <label>Username</label>\n                <input class=\"form-control\" #UserName=\"ngModel\" name=\"UserName\" [(ngModel)]=\"formModel.UserName\" required>\n              </div>\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" #Password=\"ngModel\" name=\"Password\" [(ngModel)]=\"formModel.Password\" required>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-8 offset-md-2\">\n                  <button type=\"submit\" class=\"btn btn-lg btn-block\" [disabled]=\"form.invalid\">Login</button>\n                </div>\n              </div>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.formModel = {
            UserName: '',
            Password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null)
            this.router.navigateByUrl('/home');
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.service.login(form.value).subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this.router.navigateByUrl('/home');
        }, function (err) {
            if (err.status == 400)
                _this.toastr.error('Incorrect username or password.', 'Authentication failed.');
            else
                console.log(err);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/registration/registration.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/registration/registration.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/registration/registration.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/registration/registration.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menus></app-menus>\n<div class=\"container\">\n  <div class=\"col-md-8 offset-md-2\">\n      <div class=\"jumbotron\">\n          <h1 class=\"display-4 text-center\"><i class=\"fas fa-users\"></i>Registration</h1>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n              <form [formGroup]=\"service.formModel\" autocomplete=\"off\" (submit)=\"onSubmit()\">\n                  <div class=\"form-group required\">\n                    <label>Username</label>\n                    <input class=\"form-control\" formControlName=\"UserName\">\n                    <label class=\"text-danger\" *ngIf=\"service.formModel.get('UserName').touched && service.formModel.get('UserName').errors?.required\">This field is mandatory.</label>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Email</label>\n                    <input class=\"form-control\" formControlName=\"Email\">\n                    <label class=\"text-danger\" *ngIf=\"service.formModel.get('Email').touched && service.formModel.get('Email').errors?.email\">Invalid email address.</label>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Full Name</label>\n                    <input class=\"form-control\" formControlName=\"FullName\">\n                  </div>\n                  <div formGroupName=\"Passwords\">\n                    <div class=\"form-group required\">\n                      <label>Password</label>\n                      <input type=\"password\" class=\"form-control\" formControlName=\"Password\">\n                      <label class=\"text-danger\" *ngIf=\"service.formModel.get('Passwords.Password').touched && service.formModel.get('Passwords.Password').errors?.required\">This field is mandatory.</label>\n                      <label class=\"text-danger\" *ngIf=\"service.formModel.get('Passwords.Password').touched && service.formModel.get('Passwords.Password').errors?.minlength\">Minimum 4 characters required.</label>\n                    </div>\n                    <div class=\"form-group required\">\n                      <label>Confirm Password</label>\n                      <input type=\"password\" class=\"form-control\" formControlName=\"ConfirmPassword\">\n                      <label class=\"text-danger\" *ngIf=\"service.formModel.get('Passwords.ConfirmPassword').touched && service.formModel.get('Passwords.ConfirmPassword').errors?.required\">This field is mandatory.</label>\n                      <label class=\"text-danger\" *ngIf=\"service.formModel.get('Passwords.ConfirmPassword').touched && service.formModel.get('Passwords.ConfirmPassword').errors?.passwordMismatch\">Confirm Password does not match.</label>\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-md-8 offset-md-2\">\n                      <button type=\"submit\" class=\"btn btn-lg btn-block\" [disabled]=\"!service.formModel.valid\">Sign Up</button>\n                    </div>\n                  </div>\n                </form>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




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
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/user/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/user/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/userroles/userrole/userrole.component.css":
/*!***********************************************************!*\
  !*** ./src/app/userroles/userrole/userrole.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJyb2xlcy91c2Vycm9sZS91c2Vycm9sZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/userroles/userrole/userrole.component.html":
/*!************************************************************!*\
  !*** ./src/app/userroles/userrole/userrole.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"service.userroleModel\" autocomplete=\"off\" (submit)=\"onSubmit()\">\n  <input hidden class=\"form-control\" formControlName=\"UserId\">\n  <div class=\"form-group required\">\n    <label>UserName</label>\n    <input class=\"form-control\" formControlName=\"UserName\">\n    <label class=\"text-danger\" *ngIf=\"service.userroleModel.get('UserName').touched && service.userroleModel.get('UserName').errors?.required\">This field is mandatory.</label>\n  </div>\n  <div class=\"form-group\">\n    <label>Roles</label>\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <table class=\"table table-hover\">\n          <tr *ngFor=\"let item of service.rolesList\">\n            <td>{{item.Name}}</td>\n            <td><i class=\"fas fa-minus\" (click)=\"onDelete(item)\"></i></td>\n            <td><i class=\"fas fa-plus\" (click)=\"onAdd(item)\"></i></td>\n          </tr>\n        </table>     \n      </div>\n      <div class=\"col-md-5\">\n        <table class=\"table table-hover\">\n          <tr *ngFor=\"let item of service.rolesAdded\">\n            <td>{{item}}</td>\n          </tr>\n        </table>\n        <button type=\"submit\" class=\"btn btn-lg btn-block\" [disabled]=\"!service.userroleModel.valid\">Submit</button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/userroles/userrole/userrole.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/userroles/userrole/userrole.component.ts ***!
  \**********************************************************/
/*! exports provided: UserroleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserroleComponent", function() { return UserroleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var UserroleComponent = /** @class */ (function () {
    function UserroleComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.rolesAdded = [];
    }
    UserroleComponent.prototype.ngOnInit = function () {
    };
    UserroleComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.userroleModel.value.Roles = this.service.rolesAdded;
        this.service.putUser().subscribe(function (res) {
            _this.service.userroleModel.reset();
            _this.toastr.success("Submitted Successfully", "User Roles");
        });
    };
    UserroleComponent.prototype.onDelete = function (item) {
        this.service.onDelete(item);
    };
    UserroleComponent.prototype.onAdd = function (item) {
        this.service.onAdd(item);
    };
    UserroleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userrole',
            template: __webpack_require__(/*! ./userrole.component.html */ "./src/app/userroles/userrole/userrole.component.html"),
            styles: [__webpack_require__(/*! ./userrole.component.css */ "./src/app/userroles/userrole/userrole.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], UserroleComponent);
    return UserroleComponent;
}());



/***/ }),

/***/ "./src/app/userroles/userrolelist/userrolelist.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/userroles/userrolelist/userrolelist.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJyb2xlcy91c2Vycm9sZWxpc3QvdXNlcnJvbGVsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/userroles/userrolelist/userrolelist.component.html":
/*!********************************************************************!*\
  !*** ./src/app/userroles/userrolelist/userrolelist.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n    <tr *ngFor=\"let item of userroleList\">\n      <td (click)=\"populateForm(item)\">{{item.UserName}}</td>\n      <td>\n        <i class=\"fa fa-trash-alt fa-lg text-danger\" (click)=\"onUserDelete(item.UserId)\"></i>\n      </td>\n    </tr>\n  </table>"

/***/ }),

/***/ "./src/app/userroles/userrolelist/userrolelist.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/userroles/userrolelist/userrolelist.component.ts ***!
  \******************************************************************/
/*! exports provided: UserrolelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserrolelistComponent", function() { return UserrolelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





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
                _this.toastr.warning("Deleted Successfully", "Restaurent App.");
            });
        }
    };
    UserrolelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userrolelist',
            template: __webpack_require__(/*! ./userrolelist.component.html */ "./src/app/userroles/userrolelist/userrolelist.component.html"),
            styles: [__webpack_require__(/*! ./userrolelist.component.css */ "./src/app/userroles/userrolelist/userrolelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], UserrolelistComponent);
    return UserrolelistComponent;
}());



/***/ }),

/***/ "./src/app/userroles/userroles.component.css":
/*!***************************************************!*\
  !*** ./src/app/userroles/userroles.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJyb2xlcy91c2Vycm9sZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/userroles/userroles.component.html":
/*!****************************************************!*\
  !*** ./src/app/userroles/userroles.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menus></app-menus>\n<div class=\"jumbotron\">\n  <h1 class=\"display-4 text-center\">User Roles Register</h1>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <app-userrole></app-userrole>\n    </div>\n    <div class=\"col-md-4\">\n      <app-userrolelist></app-userrolelist>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/userroles/userroles.component.ts":
/*!**************************************************!*\
  !*** ./src/app/userroles/userroles.component.ts ***!
  \**************************************************/
/*! exports provided: UserrolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserrolesComponent", function() { return UserrolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserrolesComponent = /** @class */ (function () {
    function UserrolesComponent() {
    }
    UserrolesComponent.prototype.ngOnInit = function () {
    };
    UserrolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userroles',
            template: __webpack_require__(/*! ./userroles.component.html */ "./src/app/userroles/userroles.component.html"),
            styles: [__webpack_require__(/*! ./userroles.component.css */ "./src/app/userroles/userroles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserrolesComponent);
    return UserrolesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiURL: 'http://localhost:2394/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Mr.Vannak\AngularJsCore\AngularJs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map