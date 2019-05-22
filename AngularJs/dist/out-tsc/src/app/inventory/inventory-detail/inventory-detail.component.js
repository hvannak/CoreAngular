import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InventoryService } from 'src/app/shared/inventory.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/shared/category.service';
import { UomService } from 'src/app/shared/uom.service';
var InventoryDetailComponent = /** @class */ (function () {
    function InventoryDetailComponent(service, categoryService, toastr, uomService) {
        this.service = service;
        this.categoryService = categoryService;
        this.toastr = toastr;
        this.uomService = uomService;
    }
    InventoryDetailComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.getCategory();
        this.getUom();
    };
    InventoryDetailComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            InventoryId: 0,
            InventoryDesr: '',
            Price: 0,
            CategoryId: 0,
            UomId: 0
        };
    };
    InventoryDetailComponent.prototype.getCategory = function () {
        var _this = this;
        this.categoryService.getCategory().then(function (res) { return _this.categoryList = res; });
    };
    InventoryDetailComponent.prototype.getUom = function () {
        var _this = this;
        this.uomService.getUom().then(function (res) { return _this.uomList = res; });
    };
    InventoryDetailComponent.prototype.onSubmit = function (form) {
        if (this.service.formData.InventoryId == 0) {
            this.insertRecord(form);
        }
        else {
            this.updateRecord(form);
        }
    };
    InventoryDetailComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this.service.postInventoryDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.success("Submited successfully", "Inventory Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    InventoryDetailComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this.service.PutInventoryDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.info("Submited successfully", "Warehouse Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    InventoryDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-inventory-detail',
            templateUrl: './inventory-detail.component.html',
            styleUrls: ['./inventory-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [InventoryService, CategoryService,
            ToastrService, UomService])
    ], InventoryDetailComponent);
    return InventoryDetailComponent;
}());
export { InventoryDetailComponent };
//# sourceMappingURL=inventory-detail.component.js.map