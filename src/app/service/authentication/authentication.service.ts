import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    return this.http.post<any>('http://localhost:9030/authenticate', { username, password }).pipe(
      map(
        userData => {
          const tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )

    );
  }

  isUserLoggedIn() {
    let username = sessionStorage.getItem('username');
    return !(username === null);
  }

  logout() {
    sessionStorage.removeItem('username');
  }
  
}
