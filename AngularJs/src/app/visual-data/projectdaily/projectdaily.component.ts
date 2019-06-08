import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { StandardnameService } from 'src/app/shared/standardname.service';
import { Standardname } from 'src/app/shared/standardname.model';
import { Projectdailyperformance } from 'src/app/shared/projectdailyperformance.model';

@Component({
  selector: 'app-projectdaily',
  templateUrl: './projectdaily.component.html',
  styleUrls: ['./projectdaily.component.css']
})
export class ProjectdailyComponent implements OnInit {

  projectList;
  stdList:Standardname[];
  dailyList:Projectdailyperformance[];
  public isLoaded = true;
  projectheader;
  //displayedColumns: string[] = ['DailyDate', 'NumberOfDay','AnimalDead','AcualFeed','ResultOfDayFeed','AcualAnimalWeight','ResultOfDayAnimal','QtySale','ExtAmount'];
  constructor(private service:ProjectService,private stdService:StandardnameService) { }

  ngOnInit() {
    this.service.formDaily.reset();
    this.service.getActiveProject().then(res => this.projectList = res);
    this.stdService.getStandard().then(res => this.stdList = res as Standardname[]);
  }

  filterItemsOfType(type){
    return this.stdList.filter(x=>x.Type == type);
  }

  onChangeProject(item){
    let text = item.target.options[item.target.options.selectedIndex].text;
    this.projectheader = text;
  }

  getTotalDead() {
    return this.dailyList.map(t => t.AnimalDead).reduce((acc, value) => acc + value, 0);
  }

  getTotalFeed() {
    return this.dailyList.map(t => t.AcualFeed).reduce((acc, value) => acc + value, 0);
  }

  getTotalQtySold() {
    return this.dailyList.map(t => t.QtySale).reduce((acc, value) => acc + value, 0);
  }

  getTotalWeightSold() {
    return this.dailyList.map(t => t.AcualAnimalWeight).reduce((acc, value) => acc + value, 0);
  }

  getTotalAmount() {
    return this.dailyList.map(t => t.ExtAmount).reduce((acc, value) => acc + value, 0);
  }

  getFCR(){
    let fcr = this.getTotalFeed() / this.getTotalWeightSold();
    return fcr.toFixed(2);
  }

  getDailyProject(projectId:number,standardFeed:number,standardAnimal:number){
    this.service.getDailyProject(projectId,standardFeed,standardAnimal).then(res => this.dailyList = res as Projectdailyperformance[] );
  }

  onSubmit(){
    this.isLoaded = false;
    this.service.getDailyProject(this.service.formDaily.value.ProjectId,this.service.formDaily.value.StdFeedId,this.service.formDaily.value.StdAnimalId).then(res => this.dailyList = res as Projectdailyperformance[]);
  }

  LoadAgain(){
    this.isLoaded = true;
  }
}
