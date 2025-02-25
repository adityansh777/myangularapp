import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicauthenticationService } from '../auth/basic-authentication.service';

@Injectable()
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  constructor(private basicAuthenticationService: BasicauthenticationService) {
    console.log('🔹 HttpInterceptorBasicAuthService Initialized'); // Log at initialization
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('🚀 Interceptor Invoked'); // Log when it is triggered

    let basicAuthHeaderString =
      this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      console.log('🔑 Adding Authorization Header:', basicAuthHeaderString);
      request = request.clone({
        setHeaders: { Authorization: basicAuthHeaderString },
      });
    }

    return next.handle(request);
  }
}
