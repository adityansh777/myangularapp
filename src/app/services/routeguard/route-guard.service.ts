import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  // GuardResult,
  // MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { JwtAuthenticationService } from '../auth/jwt-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(
    public jwtAuthenticationService: JwtAuthenticationService,
    public router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log('Route guard provoked');
    if (this.jwtAuthenticationService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
