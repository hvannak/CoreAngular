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
import { SaleinvoiceComponent } from './saleinvoice/saleinvoice.component';
import { SaleinvoiceService } from './shared/saleinvoice.service';
import { SaleinvoiceHeaderComponent } from './saleinvoice/saleinvoice-header/saleinvoice-header.component';
import { SaleinvoiceLineComponent } from './saleinvoice/saleinvoice-line/saleinvoice-line.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { ProjectService } from './shared/project.service';
import { ProjectaccessComponent } from './projectaccess/projectaccess.component';
import { ProjectaccessDetailComponent } from './projectaccess/projectaccess-detail/projectaccess-detail.component';
import { ProjectaccessListComponent } from './projectaccess/projectaccess-list/projectaccess-list.component';
import { StandardnameComponent } from './standardname/standardname.component';
import { StandardnameService } from './shared/standardname.service';
import { StandardnameDetailComponent } from './standardname/standardname-detail/standardname-detail.component';
import { StandardnameListComponent } from './standardname/standardname-list/standardname-list.component';
import { VisualDataComponent } from './visual-data/visual-data.component';
import { ProjectdailyComponent } from './visual-data/projectdaily/projectdaily.component';
import { ProjectstatusComponent } from './visual-data/projectstatus/projectstatus.component';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './shared/upload.service';
import { ViewuploadComponent } from './upload/viewupload/viewupload.component';
import { InregisterComponent } from './visual-data/inregister/inregister.component';
import { RolesaccessComponent } from './rolesaccess/rolesaccess.component';
import { UsereditComponent } from './user/useredit/useredit.component';
import { JspdfService } from './shared/jspdf.service';
import { SaleinvoiceSynComponent } from './saleinvoice/saleinvoice-syn/saleinvoice-syn.component';

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
    UsereditComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    RolesComponent,
    RoleComponent,
    RolesaccessComponent,
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
    ViewwithstandardComponent,
    SaleinvoiceComponent,
    SaleinvoiceHeaderComponent,
    SaleinvoiceLineComponent,
    SaleinvoiceSynComponent,
    CustomersComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    ProjectaccessComponent,
    ProjectaccessDetailComponent,
    ProjectaccessListComponent,
    StandardnameComponent,
    StandardnameDetailComponent,
    StandardnameListComponent,
    VisualDataComponent,
    ProjectdailyComponent,
    ProjectstatusComponent,
    UploadComponent,
    ViewuploadComponent,
    InregisterComponent
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
  entryComponents:[OrderItemsComponent,ReceiptLineComponent,SaleinvoiceLineComponent,UploadComponent,ViewuploadComponent,UsereditComponent],
  providers: [PaymentDetailService,CustomerService,ItemService,
    OrderService,UserService,WarehouseService,CategoryService,InventoryService,WarehouseaccessService,
    UomService,RoleService,RoleCtlService,ReceiptService,InsitestatusService,StandardService,UploadService,
    StandardnameService ,DailyanimalgrowService,SaleinvoiceService,CustomerService,ProjectService,JspdfService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
