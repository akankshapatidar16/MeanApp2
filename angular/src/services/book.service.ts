import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private url: string = environment.apiURL;

    constructor(private http: Http) { }

    getBooks() {
        let booksUrl = this.url + '/books?country=Greece';
        return this.http.get(booksUrl);
    }

    deleteBook(bookId) {
        let booksUrl = this.url + '/books/' + bookId;
        let header = new Headers;
        header.append('Content-type', 'application/json');
        return this.http.delete(booksUrl, { headers: header });
    }

    updateBook(id, book) {
        let booksUrl = this.url + '/books/' + id;
        console.log("booksUrl", booksUrl);
        let header = new Headers;
        header.append('Content-type', 'application/json');
        return this.http.put(booksUrl, book, { headers: header });
    }
}