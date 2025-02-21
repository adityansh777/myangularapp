import {
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
  HttpInterceptorFn,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const basicAuthInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  console.log('Interceptor invoked');

  const username = 'in28minutes';
  const password = 'dummy';
  const basicAuthHeaderString =
    'Basic ' + window.btoa(`${username}:${password}`);
  console.log('Interceptor: adding header', basicAuthHeaderString);

  // Clone the request and add the Authorization header
  const authReq = req.clone({
    setHeaders: { Authorization: basicAuthHeaderString },
  });

  return next(authReq);
};
