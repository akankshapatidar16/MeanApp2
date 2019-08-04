
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  item: String[];
  @Output() updated: EventEmitter<string> = new EventEmitter<string>();
  constructor(private bookService: BookService,
    public dialogRef: MatDialogRef<EditBookComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.item = JSON.parse(JSON.stringify(data));
  }

  ngOnInit() {
    //console.log(this.item)
  }

  onSubmit(updatedBook: any) {
    var bookSansID = Object.assign({}, updatedBook);
    delete bookSansID._id;    
    //console.log(clone)
    this.bookService.updateBook(updatedBook._id, bookSansID).subscribe(
      (res) => {
        if(res.ok == true) {
          console.log('emiting')
          this.updated.emit('updated');                 
         }
      }
    );
  }

}
