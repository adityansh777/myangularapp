import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { JwtAuthenticationService } from '../../services/auth/jwt-authentication.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, NgIf, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  isUserLoggedIn: Boolean = false;
  username = '';
  constructor(public jwtAuthenticationService: JwtAuthenticationService) {}
  ngOnInit() {
    this.isUserLoggedIn = this.jwtAuthenticationService.isUserLoggedIn();
    this.username = this.jwtAuthenticationService.getAuthusername() ?? '';
  }
}
