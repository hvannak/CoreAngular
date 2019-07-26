import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { StandardnameService } from 'src/app/shared/standardname.service';
import { Standardname } from 'src/app/shared/standardname.model';
import { Projectdailyperformance } from 'src/app/shared/projectdailyperformance.model';
import { JspdfService } from 'src/app/shared/jspdf.service';

@Component({
  selector: 'app-projectdaily',
  templateUrl: './projectdaily.component.html',
  styleUrls: ['./projectdaily.component.css']
})
export class ProjectdailyComponent implements OnInit {

  projectList;
  stdList:Standardname[];
  dailyList:Projectdailyperformance[];
  projectPerformanceHeader;
  public isLoaded = true;
  projectheader;
  //displayedColumns: string[] = ['DailyDate', 'NumberOfDay','AnimalDead','AcualFeed','ResultOfDayFeed','AcualAnimalWeight','ResultOfDayAnimal','QtySale','ExtAmount'];
  constructor(private service:ProjectService,private stdService:StandardnameService,private jspdfService:JspdfService) { }

  ngOnInit() {
    this.service.formDaily.reset();
    this.stdList=[];
    this.dailyList=[];
    this.projectPerformanceHeader=[];
    this.service.getActiveProject().then(res => this.projectList = res);
    this.stdService.getStandard().then(res => this.stdList = res as Standardname[]);
  }

  filterItemsOfType(type){
    return this.stdList.filter(x=>x.Type == type );
  }

  onChangeProject(item){
    let text = item.target.options[item.target.options.selectedIndex].text;
    this.projectheader = text;
  }

  getDailyProject(projectId:number,standardFeed:number,standardAnimal:number){
    this.service.getDailyProject(projectId,standardFeed,standardAnimal).then(res => this.dailyList = res as Projectdailyperformance[] );
  }

  onSubmit(){
    this.isLoaded = false;
    this.service.getDailyProject(this.service.formDaily.value.ProjectId,this.service.formDaily.value.StdFeedId,this.service.formDaily.value.StdAnimalId).then((res:any) => {
      this.dailyList = res.projectstandard as Projectdailyperformance[];
      this.projectPerformanceHeader = res.projectPerformanceHeader;
    });
  }

  captureScreen(){
    this.jspdfService.captureScreen();
  }

  LoadAgain(){
    this.isLoaded = true;
  }
}
