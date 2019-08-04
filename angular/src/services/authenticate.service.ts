import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private url: string = environment.apiURL;
    public isLoggedIn: boolean = false;

    constructor(private http:Http) {}

    authenticate(name, password) {
        //console.log(this.url);
        let authenticateUrl = this.url + '/user/authenticate';
        let body = JSON.stringify(
            {
                username: name,
                password: password
            }
        );
        let header = new Headers;
        header.append('Content-type', 'application/json');
        return this.http.post(authenticateUrl, body, { headers: header });
    }
}