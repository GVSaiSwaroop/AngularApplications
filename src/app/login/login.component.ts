import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup=new FormGroup({
    email: new FormControl(),
    password: new FormControl(),

  })

  login()
  {
    this.loginService.postlogindata(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("posted Successfully")
        localStorage.setItem("token",data.token)
        this.router.navigateByUrl("/dashboard")
      },
      (error:any)=>{
        alert("server down")
      }
    )
  }


  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

}
