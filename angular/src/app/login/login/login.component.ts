import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string;
password: string;
  constructor() { }

  ngOnInit() {
    this.username = 'sam'
    this.password = ''
  }

  onLogin() {
    //alert("login")
    console.log("inLogin()",this.username, this.password)
  }

}
