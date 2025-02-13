// app.component.ts
import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Import NgIf
import { WelcomeComponent } from './components/welcome/welcome.component'; // Import the WelcomeComponent
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [NgIf, WelcomeComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicked = false;
  title = 'app';

  onClick() {
    this.clicked = !this.clicked;
  }
}