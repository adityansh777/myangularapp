import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasicauthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    if (username === 'adityansh' && password === 'password') {
      sessionStorage.setItem('authuser', username);
      return true;
    } else {
      return false;
    }
  }

  executeAuthenticationService(
    username: string,
    password: string
  ): Observable<any> {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });
    return this.http
      .get<AuthenticationBean>(`http://localhost:8080/basicauth`, { headers })
      .pipe(
        map((data: any) => {
          sessionStorage.setItem('authuser', username);
          return data;
        })
      );
  }

  isuserloggedin() {
    let user = sessionStorage.getItem('authuser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authuser');
  }
}

export class AuthenticationBean {
  constructor(public mesaage: String) {}
}
