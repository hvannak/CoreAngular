import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { ToastrService } from 'ngx-toastr';
var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.service.refressList();
    };
    ProjectListComponent.prototype.populateForm = function (pd) {
        this.service.formData = Object.assign({}, pd);
    };
    ProjectListComponent.prototype.onDelete = function (PMId) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.service.DeleteProjectsDetail(PMId).subscribe(function (res) {
                _this.service.refressList();
                _this.toastr.warning("Deleted successfully", "Project Detail Register");
            }, function (err) {
                console.log(err);
            });
        }
    };
    ProjectListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-project-list',
            templateUrl: './project-list.component.html',
            styleUrls: ['./project-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ProjectService,
            ToastrService])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
export { ProjectListComponent };
//# sourceMappingURL=project-list.component.js.map