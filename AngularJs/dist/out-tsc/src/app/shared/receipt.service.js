import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
var ReceiptService = /** @class */ (function () {
    function ReceiptService(http, fb) {
        this.http = http;
        this.fb = fb;
        this.formReceipt = this.fb.group({
            TranType: ['', Validators.required],
            ReceiptId: [''],
            ReceiptNbr: [''],
            Description: [''],
            ReceiptDate: ['', Validators.required],
            TotalQty: [''],
            TotalCost: [''],
            DeletedReceiptLineIDs: ['']
        });
        this.formReceiptLine = this.fb.group({
            ReceiptLineId: [''],
            ReceiptId: ['', Validators.required],
            ProjectId: ['', Validators.required],
            ProjectName: [''],
            Qty: ['', Validators.required],
            UnitCost: ['', Validators.required],
            ExtCost: ['', Validators.required],
            WarehouseId: ['', Validators.required],
            WarehouseName: [''],
            InventoryId: ['', Validators.required],
            InventoryDesr: ['']
        });
    }
    ReceiptService.prototype.getReceiptList = function () {
        return this.http.get(environment.apiURL + '/Receipts').toPromise();
    };
    ReceiptService.prototype.getReceiptByID = function (id) {
        return this.http.get(environment.apiURL + '/Receipts/' + id).toPromise();
    };
    ReceiptService.prototype.postReceipt = function () {
        var body = tslib_1.__assign({}, this.formReceipt.value, { ReceiptLines: this.receiptLine });
        return this.http.post(environment.apiURL + '/Receipts', body);
    };
    ReceiptService.prototype.putReceipt = function () {
        var body = tslib_1.__assign({}, this.formReceipt.value, { ReceiptLines: this.receiptLine });
        return this.http.put(environment.apiURL + '/Receipts/' + this.formReceipt.value.ReceiptId, body);
    };
    ReceiptService.prototype.deleteReceipt = function (id) {
        return this.http.delete(environment.apiURL + '/Receipts/' + id).toPromise();
    };
    ReceiptService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, FormBuilder])
    ], ReceiptService);
    return ReceiptService;
}());
export { ReceiptService };
//# sourceMappingURL=receipt.service.js.map