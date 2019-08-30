import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {NavbarComponent} from './views/navbar/navbar.component';
import {ManageCustomerComponent} from './views/manage-customer/manage-customer.component';
import {ManageItemComponent} from './views/manage-item/manage-item.component';

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
