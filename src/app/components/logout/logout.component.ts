import { Component } from '@angular/core';
import { JwtAuthenticationService } from '../../services/auth/jwt-authentication.service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  constructor(public jwtAuthenticationService: JwtAuthenticationService) {}

  ngOnInit() {
    this.jwtAuthenticationService.logout();
    window.location.href = '/login';
  }
}
