import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../../services/hardcodedauthentication.service';
@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private router: Router,
    private hardcodedauthenticationservice: HardcodedauthenticationService
  ) {}

  username = 'adityansh';
  password = 'password';
  invalidLogin = false;
  validLogin = false;

  errorMessage = 'Wrong credentials!';
  correctMessage = 'correct pass';

  login() {
    // if (this.username === 'adityansh' && this.password === 'password') {
    // alert('Login successful!');
    if (
      this.hardcodedauthenticationservice.authenticate(
        this.username,
        this.password
      )
    ) {
      console.log('Login successful! with username', this.username);
      this.invalidLogin = false;
      this.validLogin = true;
      this.router.navigate(['welcome/', this.username]);
    } else {
      // alert('Login failed!');
      console.log('Login failed! username', this.username);
      this.invalidLogin = true;
      this.validLogin = false;
    }
  }
}
