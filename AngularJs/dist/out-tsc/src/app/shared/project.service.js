import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.postProjectsDetail = function () {
        return this.http.post(environment.apiURL + "/Projects", this.formData);
    };
    ProjectService.prototype.PutProjectsDetail = function () {
        return this.http.put(environment.apiURL + "/Projects/" + this.formData.ProjectId, this.formData);
    };
    ProjectService.prototype.DeleteProjectsDetail = function (id) {
        return this.http.delete(environment.apiURL + "/Projects/" + id);
    };
    ProjectService.prototype.refressList = function () {
        var _this = this;
        this.http.get(environment.apiURL + "/Projects")
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    ProjectService.prototype.getActiveProject = function () {
        return this.http.get(environment.apiURL + "/Projects")
            .toPromise();
    };
    ProjectService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProjectService);
    return ProjectService;
}());
export { ProjectService };
//# sourceMappingURL=project.service.js.map