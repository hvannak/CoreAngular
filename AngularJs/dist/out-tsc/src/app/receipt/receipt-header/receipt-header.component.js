import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ReceiptService } from 'src/app/shared/receipt.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { InventoryService } from 'src/app/shared/inventory.service';
import { ProjectService } from 'src/app/shared/project.service';
import { ReceiptLineComponent } from '../receipt-line/receipt-line.component';
var ReceiptHeaderComponent = /** @class */ (function () {
    function ReceiptHeaderComponent(service, router, currentRoute, toastr, dialog, inventoryService, projectService) {
        this.service = service;
        this.router = router;
        this.currentRoute = currentRoute;
        this.toastr = toastr;
        this.dialog = dialog;
        this.inventoryService = inventoryService;
        this.projectService = projectService;
    }
    ReceiptHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var receiptId = this.currentRoute.snapshot.paramMap.get('id');
        if (receiptId == null) {
            this.service.formReceipt.reset();
            this.service.formReceipt.patchValue({
                ReceiptId: 0,
                ReceiptNbr: 'NEW'
            });
            this.service.receiptLine = [];
        }
        else {
            //edit
            this.service.receiptLine = [];
            this.deleteReceiptLine = '';
            this.service.getReceiptByID(parseInt(receiptId)).then(function (res) {
                _this.service.formReceipt.setValue({
                    TranType: res.receipt['TranType'],
                    ReceiptId: res.receipt['ReceiptId'],
                    ReceiptNbr: res.receipt['ReceiptNbr'],
                    ReceiptDate: res.receipt['ReceiptDate'],
                    Description: res.receipt['Description'],
                    TotalQty: res.receipt['TotalQty'],
                    TotalCost: res.receipt['TotalCost'],
                    DeletedReceiptLineIDs: ''
                });
                _this.service.receiptLine = res.receiptLine;
            });
        }
    };
    ReceiptHeaderComponent.prototype.AddOrEditReceiptLine = function (receiptLineIndex, ReceiptId) {
        var _this = this;
        var dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = "50%";
        dialogConfig.data = { receiptLineIndex: receiptLineIndex, ReceiptId: ReceiptId };
        this.dialog.open(ReceiptLineComponent, dialogConfig).afterClosed().subscribe(function (res) {
            _this.updateGrandTotal();
        });
    };
    ReceiptHeaderComponent.prototype.onDeleteReceiptLine = function (receiptLineId, i) {
        if (receiptLineId != null) {
            this.deleteReceiptLine += receiptLineId + ",";
            this.service.receiptLine.splice(i, 1);
            this.updateGrandTotal();
            console.log(receiptLineId);
            console.log(this.deleteReceiptLine);
        }
    };
    ReceiptHeaderComponent.prototype.updateGrandTotal = function () {
        this.service.formReceipt.patchValue({
            TotalQty: this.service.receiptLine.reduce(function (prev, curr) {
                return prev + curr.Qty;
            }, 0),
            TotalCost: this.service.receiptLine.reduce(function (prev, curr) {
                return prev + curr.ExtCost;
            }, 0)
        });
    };
    ReceiptHeaderComponent.prototype.onSubmit = function () {
        if (this.service.formReceipt.value.ReceiptId == 0) {
            if (confirm('Are you sure to delete this record?')) {
                this.insertRecord();
            }
            else {
                this.insertRecord();
            }
        }
        else {
            this.updateRecord();
        }
    };
    ReceiptHeaderComponent.prototype.insertRecord = function () {
        var _this = this;
        this.service.postReceipt().subscribe(function (res) {
            _this.service.formReceipt.reset();
            _this.service.receiptLine = [];
            _this.toastr.success('Submitted Successfully', 'Receipt Register');
            _this.router.navigate(['/receipt']);
        });
    };
    ReceiptHeaderComponent.prototype.updateRecord = function () {
        var _this = this;
        this.service.formReceipt.patchValue({
            DeletedReceiptLineIDs: this.deleteReceiptLine
        });
        this.service.putReceipt().subscribe(function (res) {
            _this.service.formReceipt.reset();
            _this.deleteReceiptLine = '';
            _this.service.receiptLine = [];
            _this.toastr.success('Submitted Successfully', 'Receipt Register');
            _this.router.navigate(['/receipt']);
        });
    };
    ReceiptHeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-receipt-header',
            templateUrl: './receipt-header.component.html',
            styleUrls: ['./receipt-header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ReceiptService, Router, ActivatedRoute,
            ToastrService, MatDialog, InventoryService,
            ProjectService])
    ], ReceiptHeaderComponent);
    return ReceiptHeaderComponent;
}());
export { ReceiptHeaderComponent };
//# sourceMappingURL=receipt-header.component.js.map