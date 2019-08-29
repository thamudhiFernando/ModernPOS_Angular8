import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ManageCustomerComponent} from './manage-customer/manage-customer.component';
import {ManageItemComponent} from './manage-item/manage-item.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'manage-customer',
    component: ManageCustomerComponent
  },
  {
    path: 'manage-item',
    component: ManageItemComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
