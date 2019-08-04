import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/services/book.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EditBookComponent } from '../edit-book/edit-book.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any;
  constructor(private bookService: BookService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadBooks();
  }
  loadBooks() {
    this.bookService.getBooks().subscribe((res) => {
      this.books = res.json();
    });
  }
  editBookDialog(book) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = book;
    let dialogRef = this.dialog.open(EditBookComponent, dialogConfig);
    const sub = dialogRef.componentInstance.updated.subscribe(() => {
      console.log('inside onupdated');
      this.loadBooks();
    });
    dialogRef.afterClosed().subscribe(() => {
      /*console.log('loading books')
      this.loadBooks();*/
    });

  }

  public deleteBook(bookId) {
    this.bookService.deleteBook(bookId).subscribe(
      response => this.books = this.books.filter(books => books._id !== bookId));
  }

}
