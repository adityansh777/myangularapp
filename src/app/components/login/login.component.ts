import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {
    console.log('LoginComponent constructor called!');
    console.log('Router: ', router);
  }

  username = 'adityansh';
  password = 'password';
  invalidLogin = false;
  validLogin = false;

  errorMessage = 'Wrong credentials!';
  correctMessage = 'correct pass';

  login() {
    if (this.username === 'adityansh' && this.password === 'password') {
      // alert('Login successful!');
      console.log('Login successful! with username', this.username);
      this.invalidLogin = false;
      this.validLogin = true;
      this.router.navigate(['welcome']);
    } else {
      // alert('Login failed!');
      console.log('Login failed! username', this.username);
      this.invalidLogin = true;
      this.validLogin = false;
    }
  }
}
