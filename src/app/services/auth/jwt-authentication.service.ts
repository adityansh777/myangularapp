import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JwtAuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    return this.http
      .post<any>('http://localhost:8080/authenticate', { username, password })
      .pipe(
        map((data) => {
          sessionStorage.setItem('token', data.token);
          sessionStorage.setItem('authuser', username);
          return data;
        })
      );
  }

  getAuthenticatedToken() {
    return sessionStorage.getItem('token');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authuser');
    return user !== null;
  }
  getAuthusername() {
    return sessionStorage.getItem('authuser');
  }

  logout() {
    sessionStorage.removeItem('authuser');
    sessionStorage.removeItem('token');
  }
}
