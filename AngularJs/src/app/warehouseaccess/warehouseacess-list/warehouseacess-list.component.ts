import { Component, OnInit } from '@angular/core';
import { WarehouseaccessService } from 'src/app/shared/warehouseaccess.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouseacess-list',
  templateUrl: './warehouseacess-list.component.html',
  styleUrls: ['./warehouseacess-list.component.css']
})
export class WarehouseacessListComponent implements OnInit {

  constructor(public service:WarehouseaccessService,private router: Router,
    private toastr:ToastrService) { }

  ngOnInit() {
    
  }

}
