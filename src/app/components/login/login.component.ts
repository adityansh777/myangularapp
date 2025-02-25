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
        // Set flags for a successful login
        this.invalidLogin = false;
        this.validLogin = true;
        // Navigate to welcome page using window.location.href (full reload)
        window.location.href = '/welcome/' + this.username;
        // Alternatively, if you prefer Angular navigation, you could use:
        // this.router.navigate(['welcome', this.username]);
      },
      (error) => {
        console.log(error);
        // Set flags for an unsuccessful login
        this.invalidLogin = true;
        this.validLogin = false;
      }
    );
  }
}
