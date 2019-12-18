import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  constructor(private router:Router) { }
  fileToUpload;
  localUrl
  ngOnInit() {
  }
  logOut(){
    // var txt;
    // console.log("here is function ")
    // if (confirm("Press a button!")) {
    //   txt = "You pressed OK!";
    // } else {
    //   txt = "You pressed Cancel!";
    // }
    // document.getElementById("demo").innerHTML = txt;
    localStorage.removeItem("token")
    this.router.navigateByUrl("login")
  }
  uploadProfileImage(event) {
    if(event.target.files && event.target.files[0]){
    var reader = new FileReader();
            reader.onload = (event: any) => {
                this.localUrl = event.target.result;
                console.log("Local Url", event)
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    // this.fileToUpload = files.item(0);
    // const formData: FormData = new FormData();
    // formData.append("file", this.fileToUpload, this.fileToUpload.name);
   
  }
}
