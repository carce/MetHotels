import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
  private url = 'http://localhost/it255/metHotels-server/public/index.php';
  public isLoggedIn$ = new Subject();

  constructor(private http: Http) {
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return headers;
  }

  register(firstName, lastName, username, password) {
    let data = 'first_name=' + firstName + '&last_name=' + lastName +
    '&username=' + username + '&password=' + password;
    return this.http.post(this.url+'/register', data, {headers: this.getHeaders()}).map(res => {
      return res.json();
    });
  }

  checkIfLoggedIn() {
    this.isLoggedIn$.next(!!localStorage.getItem('token'));
  }

  logIn(username, password) {
    let data = 'username=' + username + '&password=' + password;
    return this.http.post(this.url+'/login', data, {headers: this.getHeaders()}).map(res => {
      this.isLoggedIn$.next(true);
      return res.json()
    });
  }

  logOut() {
    localStorage.removeItem('token');
    this.isLoggedIn$.next(false);
  }

}
