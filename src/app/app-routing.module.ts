import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginFailedGuard } from './Guards/LoginFailed/login-failed.guard';
import { LoginSuccessGuard } from './Guards/LoginSuccess/login-success.guard';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponentComponent,canActivate:[LoginFailedGuard]},
  {path:'signup',component:SignUpComponentComponent},
  {path:'home',component:HomeComponentComponent,canActivate:[LoginSuccessGuard],
children:[
  {path:'',component:DashboardComponentComponent},
  {path:'dashboard',component:DashboardComponentComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
