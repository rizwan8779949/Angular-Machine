import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  constructor(private router:Router,private toaster:ToastrService) { }
  fileToUpload;
  localUrl;
  message;
  imagePath;
  imgURL;
  localImageGallery=[];
  transferFromLocalImageGallery;
  ngOnInit() {
    if(localStorage.getItem("ImageGallery"))
    this.localImageGallery=JSON.parse(localStorage.getItem("ImageGallery"))
  }
  logOut(){
    if (confirm("Are you sure?") == true) {
      localStorage.removeItem("token")
      this.router.navigateByUrl("login")
  } 
  
  }
  uploadProfileImage(files) {
    console.log(files)
    if (files.length === 0)
    return;

  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.localImageGallery.push({name:files[0].name,fileUrl:reader.result})
    localStorage.setItem("ImageGallery",JSON.stringify(this.localImageGallery))
    this.toaster.success("Successfully Uploaded")
    // this.imgURL = reader.result; 
  }
   
  }
}
