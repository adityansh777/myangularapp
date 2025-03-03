import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  redirecttologin() {
    this.router.navigate(['login']);
  }

  handleSignup(): void {
    const payload = {
      username: this.username,
      password: this.password,
      // email: this.email, // include if your backend supports it; otherwise, remove this field
    };

    this.http
      .post('http://localhost:8080/signup', payload, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          console.log('Sign-up successful:', response);
          // Navigate to the login page after successful sign-up
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Sign-up failed:', err);
          // Optionally, handle error messaging here (e.g., show a notification)
        },
      });
  }
}
