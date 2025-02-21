import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../../services/hardcodedauth/hardcodedauthentication.service';
import { BasicauthenticationService } from '../../services/hardcodedauth/basic-authentication.service';
@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private router: Router,
    private hardcodedauthenticationservice: HardcodedauthenticationService,
    private BasicauthenticationService: BasicauthenticationService
  ) {}

  username = 'adityansh';
  password = 'password';
  invalidLogin = false;
  validLogin = false;

  errorMessage = 'Wrong credentials!';
  correctMessage = 'correct pass';

  handleBasicAuthlogin() {
    // if (this.username === 'adityansh' && this.password === 'password') {
    // alert('Login successful!');
    // if (
    this.BasicauthenticationService.executeAuthenticationService(
      this.username,
      this.password
    ).subscribe(
      (data) => {
        console.log(data);
        console.log('Login successful! with username', this.username);
        //page redirect
        this.invalidLogin = false;
        this.validLogin = true;
        window.location.href = '/welcome/' + this.username;
      },
      (error) => {
        console.log(error);

        this.invalidLogin = true;
      }
    );

    // else {
    //   // alert('Login failed!');
    //   console.log('Login failed! username', this.username);
    //   this.invalidLogin = true;
    //   this.validLogin = false;
    // }
  }
}
