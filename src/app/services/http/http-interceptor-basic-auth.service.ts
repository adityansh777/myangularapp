import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('interceptor invoked');

    let username = 'in28minutes';
    let password = 'dummy';
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    req = req.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString,
      },
    });
    console.log('clone invoked');

    return next.handle(req);
  }
}
