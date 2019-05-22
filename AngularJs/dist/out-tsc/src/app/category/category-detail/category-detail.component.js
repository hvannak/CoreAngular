import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { ToastrService } from 'ngx-toastr';
var CategoryDetailComponent = /** @class */ (function () {
    function CategoryDetailComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    CategoryDetailComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    CategoryDetailComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            CategoryId: 0,
            CategoryName: ''
        };
    };
    CategoryDetailComponent.prototype.onSubmit = function (form) {
        if (this.service.formData.CategoryId == 0) {
            this.insertRecord(form);
        }
        else {
            this.updateRecord(form);
        }
    };
    CategoryDetailComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this.service.postCategoryDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.success("Submited successfully", "Category Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    CategoryDetailComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this.service.PutCategoryDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.info("Submited successfully", "Category Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    CategoryDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-category-detail',
            templateUrl: './category-detail.component.html',
            styleUrls: ['./category-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CategoryService,
            ToastrService])
    ], CategoryDetailComponent);
    return CategoryDetailComponent;
}());
export { CategoryDetailComponent };
//# sourceMappingURL=category-detail.component.js.map