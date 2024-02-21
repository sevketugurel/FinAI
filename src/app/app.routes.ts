import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardComponent } from './sidebar/component/dashboard/dashboard.component';
import { FollowedComponent } from './sidebar/component/dashboard/followed/followed.component';
import { MarketsComponent } from './sidebar/component/dashboard/markets/markets.component';

export const routes: Routes = [
  {path:"",component:LoginPageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"register",component:RegisterPageComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"followed",component:FollowedComponent},
  {path:"markets",component:MarketsComponent},
];
