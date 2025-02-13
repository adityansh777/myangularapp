// app.component.ts
import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Import NgIf
import { WelcomeComponent } from './components/welcome/welcome.component'; // Import the WelcomeComponent
import { LoginComponent } from './components/login/login.component'; // Import the LoginComponent
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [NgIf, WelcomeComponent, LoginComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicked = false;
  title = 'app';

  onClick() {
    this.clicked = !this.clicked;
  }
}