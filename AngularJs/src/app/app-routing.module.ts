import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { RolesComponent } from './roles/roles.component';
import { RoleComponent } from './roles/role/role.component';
import { UserrolesComponent } from './userroles/userroles.component';
import { ForbiddenComponent } from './error/forbidden/forbidden.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ProjectComponent } from './project/project.component';
import { CategoryComponent } from './category/category.component';
import { InventoryComponent } from './inventory/inventory.component';
import { WarehouseaccessComponent } from './warehouseaccess/warehouseaccess.component';
import { UomComponent } from './uom/uom.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptHeaderComponent } from './receipt/receipt-header/receipt-header.component';
import { StandardComponent } from './standard/standard.component';
import { DailyanimalgrowComponent } from './dailyanimalgrow/dailyanimalgrow.component';
import { ViewwithstandardComponent } from './dailyanimalgrow/viewwithstandard/viewwithstandard.component';
import { SaleinvoiceComponent } from './saleinvoice/saleinvoice.component';
import { SaleinvoiceHeaderComponent } from './saleinvoice/saleinvoice-header/saleinvoice-header.component';
import { CustomersComponent } from './customers/customers.component';
import { ProjectaccessComponent } from './projectaccess/projectaccess.component';
import { StandardnameComponent } from './standardname/standardname.component';
import { ProjectdailyComponent } from './visual-data/projectdaily/projectdaily.component';
import { ProjectstatusComponent } from './visual-data/projectstatus/projectstatus.component';

const routes: Routes = [
  {path:'user',component:UserComponent,children:[
      {path:'registration',component:RegistrationComponent,canActivate:[AuthGuard]},
      {path:'login',component:LoginComponent}
  ]},
  {path:'warehouse',component:WarehouseComponent,canActivate:[AuthGuard]},
  {path:'warehouseaccess',component:WarehouseaccessComponent,canActivate:[AuthGuard]},
  {path:'project',component:ProjectComponent,canActivate:[AuthGuard]},
  {path:'projectaccess',component:ProjectaccessComponent,canActivate:[AuthGuard]},
  {path:'customer',component:CustomersComponent,canActivate:[AuthGuard]},
  {path:'category',component:CategoryComponent,canActivate:[AuthGuard]},
  {path:'inventory',component:InventoryComponent,canActivate:[AuthGuard]},
  {path:'uom',component:UomComponent,canActivate:[AuthGuard]},
  {path:'standard',component:StandardComponent,canActivate:[AuthGuard]},
  {path:'standardname',component:StandardnameComponent,canActivate:[AuthGuard]},
  {path:'dailygrow',component:DailyanimalgrowComponent,canActivate:[AuthGuard]},
  {path:'viewwithstandard',component:ViewwithstandardComponent,canActivate:[AuthGuard]},
  {path:'error/403',component:ForbiddenComponent},
  {path:'paymentcard',component:PaymentDetailsComponent,canActivate:[AuthGuard]},
  {path:'projectdaily',component:ProjectdailyComponent,canActivate:[AuthGuard]},
  {path:'projectstatus',component:ProjectstatusComponent,canActivate:[AuthGuard]},
  {path:'orders',component:OrdersComponent,canActivate:[AuthGuard]},
  {path:'order',children:[
    {path:'',component:OrderComponent},
    {path:'edit/:id',component:OrderComponent,canActivate:[AuthGuard]}
  ]},
  {path:'invoice',component:SaleinvoiceComponent,canActivate:[AuthGuard]},
  {path:'invoiceheader',children:[
    {path:'',component:SaleinvoiceHeaderComponent},
    {path:'edit/:id',component:SaleinvoiceHeaderComponent,canActivate:[AuthGuard]}
  ]},
  {path:'receipt',component:ReceiptComponent,canActivate:[AuthGuard]},
  {path:'receiptheader',children:[
    {path:'',component:ReceiptHeaderComponent},
    {path:'edit/:id',component:ReceiptHeaderComponent,canActivate:[AuthGuard]}
  ]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'roles',component:RolesComponent},
  {path:'role',children:[
    {path:'',component:RoleComponent},
    {path:'edit/:id',component:RoleComponent}
  ]},
  {
    path:'userroles',component:UserrolesComponent,canActivate:[AuthGuard]
  },
  { path : '', redirectTo:'/user/login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
