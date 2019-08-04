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

  constructor(private authservice: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.username = 'sam'
    this.password = 'pwd'    
  }

  onLogin() {    
    this.authservice.authenticate(this.username, this.password).subscribe(response => {
      let result = response.json();
     
      if (result.authenticated) {        
        this.router.navigate(["books"]);
        this.authservice.isLoggedIn = true;
      }
      else {        
        console.log("authentication failed"); 
        this.authservice.isLoggedIn = false;       
      }
    });
  }

}
