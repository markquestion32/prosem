import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
  signupUsers:any[]=[];
  signupObj:any ={
    userName:'',
    email:'',
    password:'',
  };
  loginObj: any ={
     email: '',
     password:''
  };

  constructor(private router: Router,) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if( localData != null ){
      this.signupUsers=JSON.parse(localData);
    }
  }

  onLogin(){
    const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    if( isUserExist != undefined){
      alert('user login succ');
      this.router.navigate(['/profile']);}
      else{
        alert('wrong details');
      }
    
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj ={
      userName:'',
      email:'',
      password:'',
    };
  }
}
