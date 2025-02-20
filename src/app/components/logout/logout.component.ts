import { Component } from '@angular/core';
import { HardcodedauthenticationService } from '../../services/hardcodedauth/hardcodedauthentication.service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  constructor(
    public hardcodedauthenticationlogic: HardcodedauthenticationService
  ) {}

  ngOnInit() {
    this.hardcodedauthenticationlogic.logout();
  }
}
