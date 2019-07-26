import { Component, OnInit } from '@angular/core';
import { RoleService } from '../shared/role.service';
import { RoleCtlService } from '../shared/role-ctl.service';
import { ToastrService } from 'ngx-toastr';
import { Actioninfo } from '../models/actioninfo.model';
import { Controllerinfo } from '../models/controllerinfo.model';
import { Role } from '../shared/role.model';


@Component({
  selector: 'app-rolesaccess',
  templateUrl: './rolesaccess.component.html',
  styleUrls: ['./rolesaccess.component.css']
})
export class RolesaccessComponent implements OnInit {

  ctlList;
  roleList:Role[];
  role:Role;
  controllerInfo:Controllerinfo[];
  controllerInfoAdded:Controllerinfo[];
  actionInfo:Actioninfo[];
  actionInfoFilter:Actioninfo[];
  actionInfoAdded:Actioninfo[];
  actionInfoAddedFilter:Actioninfo[];
  actionInfoAsign:Actioninfo[];
  constructor(public service:RoleService,public serviceCtl:RoleCtlService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.roleList=[];
    this.controllerInfo=[];
    this.actionInfo=[];
    this.actionInfoAdded=[];
    this.actionInfoAsign=[];
    this.controllerInfoAdded=[];
    this.actionInfoFilter=[];
    this.actionInfoAddedFilter=[];
    this.getCtl();
    this.refreshList();
    //Filter
    this.actionInfoFilter = this.actionInfo;
  }

  getCtl(){
    this.serviceCtl.getTreeList().then(res => {
      this.controllerInfo = res as Controllerinfo[];
      this.controllerInfo.forEach(element => {
        element.Actions.forEach(element1 => {
          this.actionInfo.push(element1);
        });
      });
    });
  }

  applyFunctionFilter(filterValue: string) {
    if(filterValue != ''){
      this.actionInfo = this.actionInfo.filter(x=>x.Id.toLowerCase().match(filterValue.toLowerCase()));
    }
    else{
      this.actionInfo = this.actionInfoFilter;
    }  
  }

  applyAccessFilter(filterValue: string) {
    if(filterValue != ''){
      this.actionInfoAdded = this.actionInfoAdded.filter(x=>x.Id.toLowerCase().match(filterValue.toLowerCase()));
    }
    else{
      this.actionInfoAdded = this.actionInfoAddedFilter;
    }  
  }

  refreshList() {
    this.service.getRolesList().then(res =>{
      this.roleList = res as Role[];
    });
  }

  onChange(item){
    let text = item.target.options[item.target.options.selectedIndex].text;
    console.log(text);
    this.service.formModel.patchValue({
      Id:item.target.value,
      RoleName:text
    });
    this.actionInfoAdded = [];
    this.service.getRoleByID(item.target.value).then(res => {
      this.role = res;
      if(this.role.Access != null){
        var access = JSON.parse(this.role.Access);
        this.controllerInfoAdded = access;   
        console.log(this.controllerInfoAdded);
        for(let i = 0; i < access.length; i++){
          var action = access[i].Actions;
          for(let j = 0 ; j < action.length; j++){
            var actionval = action[j];
            this.actionInfoAdded.push(actionval);
          }       
        }
        this.actionInfoAddedFilter = this.actionInfoAdded;

      }
    })
  }

  onAdd(item:any){
    let actionIndex = this.actionInfoAdded.findIndex(x=>x.Id == item.Id);
    let index = this.controllerInfoAdded.findIndex(x=>x.Id == item.ControllerId);
    if(index <= -1){
      let indexController = this.controllerInfo.findIndex(x=>x.Id == item.ControllerId);
      this.actionInfoAsign.push(item);
      this.actionInfoAdded.push(item);
      this.controllerInfoAdded.push({
        Id:this.controllerInfo[indexController].Id,
        Name:this.controllerInfo[indexController].Name,
        DisplayName:this.controllerInfo[indexController].DisplayName,
        AreaName:this.controllerInfo[indexController].AreaName,
        Actions:this.actionInfoAsign
      })
    }
    else{
      if(actionIndex <= -1){
        var arraytoJson = JSON.stringify(this.controllerInfoAdded[index].Actions);
        var jsonValue = JSON.parse(arraytoJson);
        if(jsonValue.Id != null){
          this.actionInfoAsign.push(jsonValue);
        }
        else{
          for(let i = 0; i < jsonValue.length; i++){
            this.actionInfoAsign.push(jsonValue[i]);
          }
        }
        //this.actionInfoAsign.push(JSON.parse(arraytoJson));
        this.actionInfoAsign.push(item);
        this.actionInfoAdded.push(item);
        this.controllerInfoAdded[index].Actions = this.actionInfoAsign;
      }
    }
    this.actionInfoAsign=[];
    this.service.onPutRoles(this.controllerInfoAdded).subscribe( (res:any) =>{
      if(res.Succeeded){
        this.toastr.success("New role created","Register Role");
      }
    },err =>{
      console.log(err);
    })
  }

  onDelete(item:any){
    let index = this.controllerInfoAdded.findIndex(x=>x.Id == item.ControllerId);
    if(index > -1){
      let actionIndex = this.controllerInfoAdded[index].Actions.findIndex(x=>x.Id == item.Id);
      this.controllerInfoAdded[index].Actions.splice(actionIndex,1);
      let actionAddedIndex = this.actionInfoAdded.findIndex(x=>x.Id == item.Id);
      this.actionInfoAdded.splice(actionAddedIndex,1);
      this.service.onPutRoles(this.controllerInfoAdded).subscribe( (res:any) =>{
        if(res.Succeeded){
          this.toastr.success("New role created","Register Role");
        }
      },err =>{
        console.log(err);
      })
    }
  }


}
