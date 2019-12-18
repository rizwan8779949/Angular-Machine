import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { SideBarComponentComponent } from './side-bar-component/side-bar-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ApiServiceService } from './Service/ApiService/api-service.service';
import { UtilsServiceService } from './Service/utilsService/utils-service.service';
import { LoginSuccessGuard } from './Guards/LoginSuccess/login-success.guard';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { ToastrModule, ToastrService } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SignUpComponentComponent,
    SideBarComponentComponent,
    DashboardComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,ToastrModule.forRoot(),BrowserAnimationsModule
  ],
  providers: [ApiServiceService,UtilsServiceService,LoginSuccessGuard,LoginSuccessGuard,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
