import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app.routing.module";
import { LoginModule } from './login/login.module';
import { BooksComponent } from './books/books.component';
import { BookService } from 'src/services/book.service';
import { HeaderlinksComponent } from './header/headerlinks/headerlinks.component';

@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent, FooterComponent, HomeComponent, BooksComponent, HeaderlinksComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, LoginModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
