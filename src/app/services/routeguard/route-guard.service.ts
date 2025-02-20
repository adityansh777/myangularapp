import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  // GuardResult,
  // MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { HardcodedauthenticationService } from '../hardcodedauth/hardcodedauthentication.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(
    public hardcodedauthenticationlogic: HardcodedauthenticationService,
    public router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log('Route guard provoked');
    if (this.hardcodedauthenticationlogic.isuserloggedin()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
