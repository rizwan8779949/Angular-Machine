import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
// import {} from "googlemaps";
declare let google: any;

@Component({
  selector: 'app-sign-up-component',
  templateUrl: './sign-up-component.component.html',
  styleUrls: ['./sign-up-component.component.scss']
})
export class SignUpComponentComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private myRoute: Router,
    private toaster: ToastrService,
) {}
registerForm: FormGroup;
submitted = false;
registerDto = new registerData();
cityArray = new Array();
geocoder;
// convenience getter for easy access to form fields
get f() {
    return this.registerForm.controls;
}

ngOnInit() {
    this.registerForm = this.formBuilder.group({
        name: ["", Validators.required],
        state: ["", Validators.required],
        city: ["", Validators.required],
        username: ["", Validators.required],
        address: ["", Validators.required],
        // pincode: ['', Validators.required],
        emailId: [
            "",
            Validators.compose([
                Validators.required,
                Validators.pattern("(([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4}))")
            ])
        ],
        // emailId:['',Validators.required],
        password: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
        // contactNo: ['',Validators.compose([ Validators.required,Validators.min(10000000000)])],
        contactNo: [
            null,
            Validators.compose([
                Validators.required,
                Validators.pattern("^[0-9]+(.[0-9]*){0,1}$"),
                Validators.minLength(10)
            ])
        ],
        pincode: [
            null,
            Validators.compose([
                Validators.required,
                Validators.pattern("^[0-9]+(.[0-9]*){0,1}$"),
                Validators.minLength(6)
            ])
        ]
        // empId: ['', Validators.required],
    });
}
formField(property: string) {
    return this.registerForm.get(property);
}
onSubmit() {
    this.submitted = true;

    //  Start here if form is valid
    if (this.registerForm.valid) {
      this.toaster.success("You are Registered Successfully")
      this.loginPage()
    }
}
loginPage() {
    this.myRoute.navigateByUrl("login");
}
}

class registerData {
name: any;
state: any = null;
city: any = null;
address: any;
pincode: number;
emailId: any;
password: any;
contactNumber: any;
username;
}
