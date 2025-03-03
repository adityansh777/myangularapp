import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtAuthenticationService } from '../../services/auth/jwt-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  redirecttosignup() {
    this.router.navigate(['signup']);
  }
  username = 'in28minutes';
  password = 'dummy';
  invalidLogin = false;
  validLogin = false;
  errorMessage = 'Wrong credentials!';
  correctMessage = 'Correct password';

  constructor(
    private router: Router,
    private jwtAuthService: JwtAuthenticationService
  ) {}

  handleJWTAuthLogin() {
    this.jwtAuthService.authenticate(this.username, this.password).subscribe(
      (data) => {
        console.log('Login successful! with username', this.username);

        this.invalidLogin = false;
        this.validLogin = true;
        // full reload
        window.location.href = '/welcome/' + this.username;
        // this.router.navigate(['welcome', this.username]);
      },
      (error) => {
        console.log(error);
        this.invalidLogin = true;
        this.validLogin = false;
      }
    );
  }
}
