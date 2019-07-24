import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private url: string = environment.apiURL;

    constructor(private http:Http) {}

    getBooks() {       
        let booksUrl = this.url + '/books/all';
        return this.http.get(booksUrl);
    }
}