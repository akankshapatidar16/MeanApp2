import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from 'src/services/authenticate.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule, FormsModule, HttpModule
  ], exports : [
    LoginComponent, RegisterComponent
  ],
  providers: [AuthenticationService]
})
export class LoginModule { }
