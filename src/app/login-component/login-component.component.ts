import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsServiceService } from '../Service/utilsService/utils-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  constructor(private router:Router,private utils:UtilsServiceService,private toaster:ToastrService) { }
loginDto= new loginData()
  ngOnInit() {
  }
  checkDetailsValid(){
    if(this.loginDto.userName&&this.loginDto.password)
    this.submitLoginData()
    else if (!this.loginDto.userName)
    this.toaster.error("Please enter the username")
    else if (!this.loginDto.password)
    this.toaster.error("Please enter the password")

  }
  submitLoginData(){
    localStorage.setItem("token",this.loginDto.userName)
    this.router.navigateByUrl("home")
  }  
  signupFunctionRouter()
  {
    this.router.navigateByUrl("signup")
  }
}
class loginData{
  userName;
  password;
}
