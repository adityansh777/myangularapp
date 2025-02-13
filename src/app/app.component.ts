// app.component.ts
import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Import NgIf


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [NgIf],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicked = false;
  title = 'app';

  onClick() {
    this.clicked = !this.clicked;
  }
}