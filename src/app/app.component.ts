// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MainwelcomeComponent } from './components/mainwelcome/mainwelcome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterModule, WelcomeComponent, MainwelcomeComponent],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  clicked = false;
  title = 'app';

  onClick() {
    this.clicked = !this.clicked;
  }
}
