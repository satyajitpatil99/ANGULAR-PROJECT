import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken(token:string){
    localStorage.setItem("token", token);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  isLoggedIn(){
    if(localStorage.getItem("token") != null)
      return true;
    else
      return false;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }
  login(data:any):any{
    if(data.username == "admin" && data.password == "123"){
      this.setToken("sfsdfsfsfsdfdsfsdsfsdssf");
      return {status:"success", data:{name:"prathmesh",email:"prathmesh@mail.com",usertype:"admin"}}
    }
    else{
      return {status:"failed"}
    }
  }
}
