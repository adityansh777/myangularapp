import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedauthenticationService } from '../../services/auth/hardcodedauthentication.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  isUserLoggedIn: Boolean = false;
  constructor(
    public hardcodedauthenticationservice: HardcodedauthenticationService
  ) {}
  ngOnInit() {
    this.isUserLoggedIn = this.hardcodedauthenticationservice.isuserloggedin();
  }
}
