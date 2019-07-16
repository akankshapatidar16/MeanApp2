import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app.routing.module";
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent, FooterComponent, HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
