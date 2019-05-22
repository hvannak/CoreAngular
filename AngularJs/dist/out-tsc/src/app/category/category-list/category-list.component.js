import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { ToastrService } from 'ngx-toastr';
var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.service.refressList();
    };
    CategoryListComponent.prototype.populateForm = function (pd) {
        this.service.formData = Object.assign({}, pd);
    };
    CategoryListComponent.prototype.onDelete = function (PMId) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.service.DeleteCategoryDetail(PMId).subscribe(function (res) {
                _this.service.refressList();
                _this.toastr.warning("Deleted successfully", "Category Detail Register");
            }, function (err) {
                console.log(err);
            });
        }
    };
    CategoryListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-category-list',
            templateUrl: './category-list.component.html',
            styleUrls: ['./category-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CategoryService, ToastrService])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
export { CategoryListComponent };
//# sourceMappingURL=category-list.component.js.map