import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ReceiptService } from 'src/app/shared/receipt.service';
import { ProjectService } from 'src/app/shared/project.service';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { InventoryService } from 'src/app/shared/inventory.service';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { InsitestatusService } from 'src/app/shared/insitestatus.service';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-receipt-line',
  templateUrl: './receipt-line.component.html',
  styleUrls: ['./receipt-line.component.css']
})
export class ReceiptLineComponent implements OnInit {

  projectList;
  warehouseList;
  inventoryList;
  categoryList;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<ReceiptLineComponent>,private service:ReceiptService,
  private projectService:ProjectService,private warehouseService:WarehouseService,private categoryService:CategoryService,
  private inventoryService:InventoryService,private insiteStatusService:InsitestatusService) { }

  ngOnInit() {
    this.getActiveProject();
    this.getInventory();
    if(this.data.receiptLineIndex == null){
      this.service.formReceiptLine.reset();
      this.service.formReceiptLine.patchValue({
        ReceiptLineId:0,
        ReceiptId:0
      });
    }
    else{
      console.log(this.service.receiptLine[this.data.receiptLineIndex].WarehouseId);
      //edit
      this.service.formReceiptLine.setValue(this.service.receiptLine[this.data.receiptLineIndex]);
    }
  }

  getActiveProject(){
    this.projectService.getActiveProject().then(res => this.projectList = res);
  }

  getInventory(){
    this.inventoryService.getInventory().then(res=>this.inventoryList = res);
  }

  onChangeProject(item){
    this.warehouseService.getWarehouseByProjectId(item.target.value).then(res => this.warehouseList = res);
    let text = item.target.options[item.target.options.selectedIndex].text;
    this.service.formReceiptLine.patchValue({
      ProjectName:text
    });
  }

  onChangeWarehouse(item){
    let text = item.target.options[item.target.options.selectedIndex].text;
    this.service.formReceiptLine.patchValue({
      WarehouseName:text
    });
  }

  onChangeInventory(item){
    let text = item.target.options[item.target.options.selectedIndex].text;
    this.service.formReceiptLine.patchValue({
      InventoryDesr:text
    });
    this.insiteStatusService.getInsiteStatusByPWI(this.service.formReceiptLine.value.ProjectId,this.service.formReceiptLine.value.WarehouseId,this.service.formReceiptLine.value.InventoryId)
        .then(res =>{
          if(res != null){
            this.service.formReceiptLine.patchValue({
              UnitCost: res["LastCost"]
            });
          }
          else{
            this.service.formReceiptLine.patchValue({
              UnitCost: 0
            });
          }
        });

  }

  updatePrice(valuechange,type){
    if(type == '1'){
      let extcost = parseFloat((this.service.formReceiptLine.value.UnitCost * valuechange).toFixed(2));
      this.service.formReceiptLine.patchValue({
        ExtCost:extcost
      });
    }
    else{
      let extcost = parseFloat((this.service.formReceiptLine.value.Qty * valuechange).toFixed(2));
      this.service.formReceiptLine.patchValue({
        ExtCost:extcost
      });
    }
  }

  onSubmit(){
    if(this.data.receiptLineIndex == null){
      //add
      this.service.receiptLine.push(this.service.formReceiptLine.value);
    }
    else{
      //edit
      this.service.receiptLine[this.data.receiptLineIndex] = this.service.formReceiptLine.value;
    }
    this.dialogRef.close();
  }
}
