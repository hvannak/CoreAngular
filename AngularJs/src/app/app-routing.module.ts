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

const routes: Routes = [
  {path:'user',component:UserComponent,children:[
      {path:'registration',component:RegistrationComponent,canActivate:[AuthGuard]},
      {path:'login',component:LoginComponent}
  ]},
  {path:'warehouse',component:WarehouseComponent,canActivate:[AuthGuard]},
  {path:'warehouseaccess',component:WarehouseaccessComponent,canActivate:[AuthGuard]},
  {path:'project',component:ProjectComponent,canActivate:[AuthGuard]},
  {path:'category',component:CategoryComponent,canActivate:[AuthGuard]},
  {path:'inventory',component:InventoryComponent,canActivate:[AuthGuard]},
  {path:'error/403',component:ForbiddenComponent},
  {path:'paymentcard',component:PaymentDetailsComponent,canActivate:[AuthGuard]},
  {path:'orders',component:OrdersComponent,canActivate:[AuthGuard]},
  {path:'order',children:[
    {path:'',component:OrderComponent},
    {path:'edit/:id',component:OrderComponent,canActivate:[AuthGuard]}
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
