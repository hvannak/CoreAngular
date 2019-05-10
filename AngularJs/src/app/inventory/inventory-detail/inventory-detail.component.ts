import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/shared/inventory.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/shared/category.service';
import { UomService } from 'src/app/shared/uom.service';
import { Uom } from 'src/app/shared/uom';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css']
})
export class InventoryDetailComponent implements OnInit {

  categoryList;
  uomList:Uom[];
  constructor(public service:InventoryService,private categoryService:CategoryService,
    private toastr:ToastrService,private uomService:UomService) { }

  ngOnInit() {
    this.resetForm();
    this.getCategory();
    this.getUom();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      InventoryId:0,
      InventoryDesr:'',
      Price:0,
      CategoryId:0,
      UomId:0
    }
  }
  getCategory(){
    this.categoryService.getCategory().then(res => this.categoryList = res);
  }

  getUom(){
    this.uomService.getUom().then(res => this.uomList = res as Uom[]);
  }

  onSubmit(form:NgForm){
    if(this.service.formData.InventoryId == 0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  
  insertRecord(form:NgForm){
    this.service.postInventoryDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success("Submited successfully","Inventory Detail Register");
        this.service.refressList();
      },
      err=>{
        console.log(err);
      })
  }

  updateRecord(form:NgForm){
    this.service.PutInventoryDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.info("Submited successfully","Warehouse Detail Register");
        this.service.refressList();
      },
      err=>{
        console.log(err);
      })
  }

}
