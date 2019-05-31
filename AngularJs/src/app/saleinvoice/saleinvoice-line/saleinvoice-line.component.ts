import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SaleinvoiceService } from 'src/app/shared/saleinvoice.service';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { InventoryService } from 'src/app/shared/inventory.service';

@Component({
  selector: 'app-saleinvoice-line',
  templateUrl: './saleinvoice-line.component.html',
  styleUrls: ['./saleinvoice-line.component.css']
})
export class SaleinvoiceLineComponent implements OnInit {

  warehouseList;
  inventoryList;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<SaleinvoiceLineComponent>,private service:SaleinvoiceService,
  private warehouseService:WarehouseService,private inventoryService:InventoryService) { }

  ngOnInit() {
    this.inventoryService.getInventory().then(res => this.inventoryList = res);
    if(this.data.invoiceLineIndex == null){
      this.service.formInvoiceLine.reset();
      this.service.formInvoiceLine.patchValue({
        SaleInvoiceLineId:0,
        SaleInvoiceId:0
      });
    }
    else{
      //edit
      this.service.formInvoiceLine.setValue(this.service.invoiceLine[this.data.invoiceLineIndex]);
    }

  }

  onChangeWarehouse(item){
    let text = item.target.options[item.target.options.selectedIndex].text;
    this.service.formInvoiceLine.patchValue({
      WarehouseName:text
    });
  }

  onChangeInventory(item){
    let text = item.target.options[item.target.options.selectedIndex].text;
    this.service.formInvoiceLine.patchValue({
      InventoryDesr:text
    });
  }

  updatePrice(valuechange,type){
    if(type == '1'){
      let extcost = parseFloat((this.service.formInvoiceLine.value.Unitprice * valuechange).toFixed(2));
      this.service.formInvoiceLine.patchValue({
        ExtCost:extcost
      });
    }
    else{
      let extamount = parseFloat((this.service.formInvoiceLine.value.Qty * valuechange).toFixed(2));
      this.service.formInvoiceLine.patchValue({
        ExtAmount:extamount
      });
    }
  }

  onSubmit(){
    if(this.data.receiptLineIndex == null){
      //add
      this.service.invoiceLine.push(this.service.formInvoiceLine.value);
    }
    else{
      //edit
      this.service.invoiceLine[this.data.receiptLineIndex] = this.service.formInvoiceLine.value;
    }
    this.dialogRef.close();
  }
}
