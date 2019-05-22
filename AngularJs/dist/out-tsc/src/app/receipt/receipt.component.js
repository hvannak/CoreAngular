import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ReceiptService } from '../shared/receipt.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
var ReceiptComponent = /** @class */ (function () {
    function ReceiptComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
    }
    ReceiptComponent.prototype.ngOnInit = function () {
        this.refreshList();
    };
    ReceiptComponent.prototype.refreshList = function () {
        var _this = this;
        this.service.getReceiptList().then(function (res) { return _this.receiptList = res; });
    };
    ReceiptComponent.prototype.openForEdit = function (receiptId) {
        this.router.navigate(['/receiptheader/edit/' + receiptId]);
    };
    ReceiptComponent.prototype.onReceiptDelete = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.service.deleteReceipt(id).then(function (res) {
                _this.refreshList();
                _this.toastr.warning("Deleted Successfully", "Receipt Register.");
            });
        }
    };
    ReceiptComponent = tslib_1.__decorate([
        Component({
            selector: 'app-receipt',
            templateUrl: './receipt.component.html',
            styleUrls: ['./receipt.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ReceiptService,
            Router,
            ToastrService])
    ], ReceiptComponent);
    return ReceiptComponent;
}());
export { ReceiptComponent };
//# sourceMappingURL=receipt.component.js.map