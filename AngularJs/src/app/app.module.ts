import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MenusComponent } from './menus/menus.component';
import { MaterialModule } from './material.module';
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './shared/payment-detail.service';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderItemsComponent } from './orders/order-items/order-items.component';
import { CustomerService } from './shared/customer.service';
import { ItemService } from './shared/item.service';
import { OrderService } from './shared/order.service';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { RolesComponent } from './roles/roles.component';
import { RoleComponent } from './roles/role/role.component';
import { RoleCtlComponent } from './roles/role-ctl/role-ctl.component';
import { RoleService } from './shared/role.service';
import { RoleCtlService } from './shared/role-ctl.service';
import { UserroleComponent } from './userroles/userrole/userrole.component';
import { UserrolelistComponent } from './userroles/userrolelist/userrolelist.component';
import { UserrolesComponent } from './userroles/userroles.component';
import { ForbiddenComponent } from './error/forbidden/forbidden.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseDetailsComponent } from './warehouse/warehouse-details/warehouse-details.component';
import { WarehouseListComponent } from './warehouse/warehouse-list/warehouse-list.component';
import { WarehouseService } from './shared/warehouse.service';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryService } from './shared/category.service';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryDetailComponent } from './inventory/inventory-detail/inventory-detail.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryService } from './shared/inventory.service';
import { WarehouseaccessComponent } from './warehouseaccess/warehouseaccess.component';
import { WarehouseacessDetailComponent } from './warehouseaccess/warehouseacess-detail/warehouseacess-detail.component';
import { WarehouseacessListComponent } from './warehouseaccess/warehouseacess-list/warehouseacess-list.component';
import { WarehouseaccessService } from './shared/warehouseaccess.service';
import { UomComponent } from './uom/uom.component';
import { UomDetailComponent } from './uom/uom-detail/uom-detail.component';
import { UomListComponent } from './uom/uom-list/uom-list.component';
import { UomService } from './shared/uom.service';
import { ReceiptService } from './shared/receipt.service';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptHeaderComponent } from './receipt/receipt-header/receipt-header.component';
import { ReceiptLineComponent } from './receipt/receipt-line/receipt-line.component';
import { InsitestatusService } from './shared/insitestatus.service';
import { StandardComponent } from './standard/standard.component';
import { StandardDetailComponent } from './standard/standard-detail/standard-detail.component';
import { StandardListComponent } from './standard/standard-list/standard-list.component';
import { StandardService } from './shared/standard.service';
import { DailyanimalgrowComponent } from './dailyanimalgrow/dailyanimalgrow.component';
import { DailyanimalgrowDetailComponent } from './dailyanimalgrow/dailyanimalgrow-detail/dailyanimalgrow-detail.component';
import { DailyanimalgrowListComponent } from './dailyanimalgrow/dailyanimalgrow-list/dailyanimalgrow-list.component';
import { DailyanimalgrowService } from './shared/dailyanimalgrow.service';
import { ViewwithstandardComponent } from './dailyanimalgrow/viewwithstandard/viewwithstandard.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemsComponent,
    MenusComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    RolesComponent,
    RoleComponent,
    RoleCtlComponent,
    UserroleComponent,
    UserrolelistComponent,
    UserrolesComponent,
    ForbiddenComponent,
    WarehouseComponent,
    WarehouseDetailsComponent,
    WarehouseListComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    CategoryComponent,
    CategoryDetailComponent,
    CategoryListComponent,
    InventoryComponent,
    InventoryDetailComponent,
    InventoryListComponent,
    WarehouseaccessComponent,
    WarehouseacessDetailComponent,
    WarehouseacessListComponent,
    UomComponent,
    UomDetailComponent,
    UomListComponent,
    ReceiptComponent,
    ReceiptHeaderComponent,
    ReceiptLineComponent,
    StandardComponent,
    StandardDetailComponent,
    StandardListComponent,
    DailyanimalgrowComponent,
    DailyanimalgrowDetailComponent,
    DailyanimalgrowListComponent,
    ViewwithstandardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  entryComponents:[OrderItemsComponent,ReceiptLineComponent],
  providers: [PaymentDetailService,CustomerService,ItemService,
    OrderService,UserService,WarehouseService,CategoryService,InventoryService,WarehouseaccessService,
    UomService,RoleService,RoleCtlService,ReceiptService,InsitestatusService,StandardService,DailyanimalgrowService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
