import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app.routing.module";
import { LoginModule } from './login/login.module';
import { BooksComponent } from './books/books.component';
import { BookService } from 'src/services/book.service';
import { HeaderlinksComponent } from './header/headerlinks/headerlinks.component';
import { ADorBCPipe } from './adORbc.pipe';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent, HomeComponent, BooksComponent, HeaderlinksComponent, ADorBCPipe, EditBookComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, LoginModule, FormsModule, MatDialogModule, BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule
  ],
  providers: [BookService],
  exports: [MatFormFieldModule],
  entryComponents: [EditBookComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
