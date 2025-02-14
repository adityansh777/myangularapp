// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterModule],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  clicked = false;
  title = 'app';

  onClick() {
    this.clicked = !this.clicked;
  }
}
