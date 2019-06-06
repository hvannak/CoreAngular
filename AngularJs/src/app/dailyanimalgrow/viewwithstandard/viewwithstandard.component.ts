import { Component, OnInit, ViewChild } from '@angular/core';
import { DailyanimalgrowService } from 'src/app/shared/dailyanimalgrow.service';
import { ProjectService } from 'src/app/shared/project.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Animalgrowstandard } from 'src/app/shared/animalgrowstandard';
import { StandardnameService } from 'src/app/shared/standardname.service';

@Component({
  selector: 'app-viewwithstandard',
  templateUrl: './viewwithstandard.component.html',
  styleUrls: ['./viewwithstandard.component.css']
})
export class ViewwithstandardComponent implements OnInit {

  projectList;
  standardList;
  projectId:number;
  standardId:number;
  displayedColumns: string[] = ['ProjectName','WarehouseName', 'InventoryDesc','DateGrow','ResultOfDay','Weight','NumberOfDay'];
  animalgrowList: MatTableDataSource<Animalgrowstandard>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service:DailyanimalgrowService,private projectService:ProjectService,private standardnameService:StandardnameService) { }

  ngOnInit() {
     this.getProject();
     this.getStandard();
  }

  onSubmit(){
    this.service.getDailyGrowWithStandard(this.projectId,this.standardId).then(res => {
      this.animalgrowList = new MatTableDataSource(res as Array<Animalgrowstandard>);
      this.animalgrowList.paginator = this.paginator;
      this.animalgrowList.sort = this.sort;
    });
  }

  getStandard(){
    this.standardnameService.getStandard().then(res => this.standardList = res);
  }

  applyFilter(filterValue: string) {
    this.animalgrowList.filter = filterValue.trim().toLowerCase();
  
    if (this.animalgrowList.paginator) {
      this.animalgrowList.paginator.firstPage();
    }
  }

  getProject(){
    this.projectService.getActiveProject().then(res=>this.projectList = res);
  }
}
