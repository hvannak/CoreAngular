import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { ToastrService } from 'ngx-toastr';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
var moment = _rollupMoment || _moment;
var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(service, warehouseService, toastr) {
        this.service = service;
        this.warehouseService = warehouseService;
        this.toastr = toastr;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.getWarehouse();
    };
    ProjectDetailComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            ProjectId: 0,
            ProjectName: '',
            StartDate: new Date(),
            EndDate: new Date(),
            WarehouseId: 0,
            WarehouseName: '',
            Status: ''
        };
    };
    ProjectDetailComponent.prototype.getWarehouse = function () {
        var _this = this;
        this.warehouseService.getWarehouse().then(function (res) { return _this.warehouseList = res; });
    };
    ProjectDetailComponent.prototype.onSubmit = function (form) {
        if (this.service.formData.ProjectId == 0) {
            this.insertRecord(form);
        }
        else {
            this.updateRecord(form);
        }
    };
    ProjectDetailComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this.service.formData.StartDate = this.getLocalDate(this.service.formData.StartDate.toLocaleDateString());
        this.service.formData.EndDate = this.getLocalDate(this.service.formData.EndDate.toLocaleDateString());
        console.log(this.service.formData.EndDate.toLocaleString());
        this.service.postProjectsDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.success("Submited successfully", "Project Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    ProjectDetailComponent.prototype.updateRecord = function (form) {
        var _this = this;
        if (this.service.formData.StartDate.toLocaleString().indexOf('/') !== -1) {
            this.service.formData.StartDate = this.getLocalDate(this.service.formData.StartDate.toLocaleDateString());
        }
        if (this.service.formData.EndDate.toLocaleString().indexOf('/') !== -1) {
            this.service.formData.EndDate = this.getLocalDate(this.service.formData.EndDate.toLocaleDateString());
        }
        this.service.PutProjectsDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.info("Submited successfully", "Project Detail Register");
            _this.service.refressList();
        }, function (err) {
            console.log(err);
        });
    };
    ProjectDetailComponent.prototype.getLocalDate = function (item) {
        var ldate = item.split('/');
        var date = ldate[2] + '-' + ldate[0] + '-' + ldate[1];
        return new Date(date);
    };
    ProjectDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-project-detail',
            templateUrl: './project-detail.component.html',
            styleUrls: ['./project-detail.component.css'],
        }),
        tslib_1.__metadata("design:paramtypes", [ProjectService, WarehouseService,
            ToastrService])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
export { ProjectDetailComponent };
//# sourceMappingURL=project-detail.component.js.map