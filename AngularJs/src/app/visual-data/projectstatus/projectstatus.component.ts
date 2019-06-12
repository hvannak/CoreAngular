import { Component, OnInit } from '@angular/core';
import { InsitestatusService } from 'src/app/shared/insitestatus.service';
import { ProjectService } from 'src/app/shared/project.service';
import { InventoryService } from 'src/app/shared/inventory.service';
import { Insitestatus } from 'src/app/shared/insitestatus.model';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-projectstatus',
  templateUrl: './projectstatus.component.html',
  styleUrls: ['./projectstatus.component.css']
})
export class ProjectstatusComponent implements OnInit {

  insiteList:Insitestatus[];
  projectList;
  inventoryList;
  projectheader;
  public isLoaded = true;
  constructor(private service:InsitestatusService,private projectService:ProjectService,private inventoryService:InventoryService) { }

  ngOnInit() {
    this.projectService.getActiveProject().then(res => this.projectList = res);
    this.inventoryService.getInventory().then(res => this.inventoryList = res);
  }

  onChangeProject(item){
    let text = item.target.options[item.target.options.selectedIndex].text;
    this.projectheader = text;
    console.log(this.projectheader);
  }

  onSubmit(){
    this.isLoaded = false;
    this.service.getInsiteStatusByProjectInventory(this.service.formInsiteFilter.value.ProjectId,this.service.formInsiteFilter.value.InventoryId).then(res => this.insiteList = res as Array<Insitestatus>);
  }

  getTotalQtyOnHand() {
    return this.insiteList.map(t =>  t.QtyOnHand).reduce((acc, value) => acc + value, 0);
  }

  getTotalQtyIssue() {
    return this.insiteList.map(t => t.QtyIssue).reduce((acc, value) => acc + value, 0);
  }

  getTotalQtyReceipt() {
    return this.insiteList.map(t => t.QtyReceipt).reduce((acc, value) => acc + value, 0);
  }

  getTotalQtyAdjust() {
    return this.insiteList.map(t => t.QtyAdjust).reduce((acc, value) => acc + value, 0);
  }

  getTotalQtySaleByUnit() {
    return this.insiteList.map(t => t.QtySaleByUnit).reduce((acc, value) => acc + value, 0);
  }

  getTotalQtySaleByKg() {
    return this.insiteList.map(t => t.QtySaleByKg).reduce((acc, value) => acc + value, 0);
  }

  getTotalIssueCost() {
    return this.insiteList.map(t => t.IssueCost).reduce((acc, value) => acc + value, 0);
  }

  getTotalReceiptCost() {
    return this.insiteList.map(t => t.ReceiptCost).reduce((acc, value) => acc + value, 0);
  }

  getTotalAdjustCost() {
    return this.insiteList.map(t => t.AdjustCost).reduce((acc, value) => acc + value, 0);
  }

  getTotalSaleAmount() {
    return this.insiteList.map(t => t.SaleAmount).reduce((acc, value) => acc + value, 0);
  }

  getTotalSaleAmountKhr() {
    return this.insiteList.map(t => t.SaleAmountKhr).reduce((acc, value) => acc + value, 0);
  }

  LoadAgain(){
    this.isLoaded = true;
  }
}
