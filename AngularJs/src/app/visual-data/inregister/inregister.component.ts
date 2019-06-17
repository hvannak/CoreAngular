import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { FormBuilder, Validators } from '@angular/forms';
import { InventoryService } from 'src/app/shared/inventory.service';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { ReceiptService } from 'src/app/shared/receipt.service';

@Component({
  selector: 'app-inregister',
  templateUrl: './inregister.component.html',
  styleUrls: ['./inregister.component.css']
})
export class InregisterComponent implements OnInit {

  projectList;
  inventoryList;
  warehouseList;
  inRegisterList;
  public isLoaded = true;
  projectheader;
  constructor(private service:ProjectService,private inventoryService:InventoryService,
   private warehouseService:WarehouseService,private receiptService:ReceiptService ,private fb:FormBuilder) { }
  formFilter = this.fb.group({
    ProjectId:['',Validators.required],
    TranType:['',Validators.required],
    WarehouseId:['',Validators.required],
    InventoryId:['',Validators.required]
  });

  ngOnInit() {
    this.service.getActiveProject().then(res => this.projectList = res);
    this.inventoryService.getInventory().then(res => this.inventoryList = res);

  }

  onChangeProject(item){
    let text = item.target.options[item.target.options.selectedIndex].text;
    this.projectheader = text;
    this.warehouseService.getWarehouseByProjectId(item.target.value).then(res => this.warehouseList = res);
  }

  onSubmit(){
    this.isLoaded = false;
    this.receiptService.getReceiptByProjectdetail(this.formFilter.value.ProjectId,this.formFilter.value.TranType,this.formFilter.value.WarehouseId,this.formFilter.value.InventoryId).then(res => this.inRegisterList = res);
  }

  LoadAgain(){
    this.isLoaded = true;
  }
}
