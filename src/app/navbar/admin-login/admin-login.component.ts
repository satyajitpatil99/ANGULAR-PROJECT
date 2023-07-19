import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  formData:any;

  constructor(private authService:AuthService , private router:Router){}
  ngOnInit(): void {

    if(this.authService.isLoggedIn()){
      this.router.navigate(['/admin/dashboard']);
    }
    this.formData = new FormGroup({
      username : new FormControl("", Validators.compose([Validators.required])),
      password : new FormControl("", Validators.compose([Validators.required]))
    })
  }

  Login(data:any){
    let result = this.authService.login(data);
    if(result.status == "success"){
      localStorage.setItem("name",result.data.name);
      localStorage.setItem("email",result.data.email);
      localStorage.setItem("usertype",result.data.usertype);
      this.router.navigate(['/admin/dashboard'])
    }
    else{
      alert("Invalid credentials")
    }

  }}
