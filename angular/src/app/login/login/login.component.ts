import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  authFailure: boolean;

  constructor(private authservice: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.username = 'sam'
    this.password = 'pwd'    
  }

  onLogin() {    
    this.authservice.authenticate(this.username, this.password).subscribe(response => {
      let result = response.json();
     
      if (result.authenticated) {
        this.authFailure = false;        
        this.router.navigate(["books"]);
      }
      else {
        this.authFailure = true;
        console.log("authentication failed");        
      }
    });
  }

}
