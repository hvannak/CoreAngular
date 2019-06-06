import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { StandardnameService } from 'src/app/shared/standardname.service';
import { Standardname } from 'src/app/shared/standardname.model';

@Component({
  selector: 'app-projectdaily',
  templateUrl: './projectdaily.component.html',
  styleUrls: ['./projectdaily.component.css']
})
export class ProjectdailyComponent implements OnInit {

  projectList;
  stdList:Standardname[];
  dailyList;
  constructor(private service:ProjectService,private stdService:StandardnameService) { }

  ngOnInit() {
    this.service.formDaily.reset();
    this.service.getActiveProject().then(res => this.projectList = res);
    this.stdService.getStandard().then(res => this.stdList = res as Standardname[]);
  }

  filterItemsOfType(type){
    return this.stdList.filter(x=>x.Type == type);
  }

  getDailyProject(projectId:number,standardFeed:number,standardAnimal:number){
    this.service.getDailyProject(projectId,standardFeed,standardAnimal).then(res => this.dailyList = res);
  }

  onSubmit(){
    this.service.getDailyProject(this.service.formDaily.value.ProjectId,this.service.formDaily.value.StdFeedId,this.service.formDaily.value.StdAnimalId).then(res => this.dailyList = res);
  }
}
