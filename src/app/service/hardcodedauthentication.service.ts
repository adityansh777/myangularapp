import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedauthenticationService {
  constructor() {}

  authenticate(username: string, password: string) {
    if (username === 'adityansh' && password === 'password') {
      sessionStorage.setItem('authuser', username);
      return true;
    } else {
      return false;
    }
  }

  isuserloggedin() {
    let user = sessionStorage.getItem('authuser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authuser');
  }
}
