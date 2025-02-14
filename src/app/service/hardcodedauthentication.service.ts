import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedauthenticationService {
  constructor() {}

  authenticate(username: string, password: string) {
    if (username === 'adityansh' && password === 'password') {
      return true;
    } else {
      return false;
    }
  }
}
