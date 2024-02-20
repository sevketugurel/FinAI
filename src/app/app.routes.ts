import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path:"",component:LoginPageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"register",component:RegisterPageComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"dashboard",component:DashboardComponent},
];
