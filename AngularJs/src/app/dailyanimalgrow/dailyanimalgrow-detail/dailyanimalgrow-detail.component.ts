import { Component, OnInit } from '@angular/core';
import { DailyanimalgrowService } from 'src/app/shared/dailyanimalgrow.service';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/shared/project.service';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { InventoryService } from 'src/app/shared/inventory.service';
import { Dailyanimalgrow } from 'src/app/shared/dailyanimalgrow.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-dailyanimalgrow-detail',
  templateUrl: './dailyanimalgrow-detail.component.html',
  styleUrls: ['./dailyanimalgrow-detail.component.css']
})
export class DailyanimalgrowDetailComponent implements OnInit {

  projectList;
  warehouseList;
  inventoryList;
  constructor(private service:DailyanimalgrowService,private toastr: ToastrService,private projectService:ProjectService,
    private warehouseService:WarehouseService,private inventoryService:InventoryService) { }

  ngOnInit() {
    this.getActiveProject();
    this.getInventory();
    this.service.formModel.reset();
    this.service.formModel.patchValue({
      DailyGrowId:0
    });
  }

  onSubmit(){
    if(this.service.formModel.value.DailyGrowId == 0){
      this.postDailyGrow();
    }
    else{
      this.putDailyGrow();
    }
  }

  postDailyGrow(){
    this.service.formModel.value.DateGrow = this.getLocalDate(this.service.formModel.value.DateGrow.toLocaleDateString());
    this.service.postDailyGrow().subscribe( (res:any) => {
      this.service.list.data.push(res);
      this.service.list._updateChangeSubscription();
      this.service.formModel.reset();
      this.service.formModel.patchValue({
        DailyGrowId:0
      });
      console.log('update list');
      this.toastr.success('Animal grow created!', 'Animal grow successful.');
    });
  }

  putDailyGrow(){
    console.log("do");
    if(this.service.formModel.value.DateGrow.toLocaleString().indexOf('/') !== -1){
      this.service.formModel.value.DateGrow = this.getLocalDate(this.service.formModel.value.DateGrow.toLocaleDateString());
    }
    this.service.putDailyGrow().subscribe( (res:any) => {
      let index = this.service.list.data.findIndex(x=>x.DailyGrowId == this.service.formModel.value.DailyGrowId);
      this.service.list.data[index] = this.service.formModel.value;
      this.service.list._updateChangeSubscription();
      this.service.formModel.reset();
      this.service.formModel.patchValue({
        DailyGrowId:0
      });
      this.service.getDailyGrow();
      this.toastr.success('Animal grow updated!', 'Animal grow successful.');
    });
  }

  getActiveProject(){
    this.projectService.getActiveProject().then(res => this.projectList = res);
  }

  getInventory(){
    this.inventoryService.getInventoryAnimal().then(res=>this.inventoryList = res);
  }

  onChangeWarehouse(item){
    let text = item.target.options[item.target.options.selectedIndex].text;
    this.service.formModel.patchValue({
      WarehouseName:text
    });
  }

  onChangeInventory(item){
    let text = item.target.options[item.target.options.selectedIndex].text;
    this.service.formModel.patchValue({
      InventoryDesc:text
    });
  }

  getLocalDate(item:string){
    var ldate = item.split('/');
    var date = ldate[2] + '-' + ldate[0] + '-' + ldate[1];
    return new Date(date);
  }

}
