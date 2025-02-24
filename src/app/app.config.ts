import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import {
  HTTP_INTERCEPTORS,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { HttpInterceptorBasicAuthService } from './services/http/interceptor.service';

console.log('🛠 Registering HttpInterceptorBasicAuthService');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(BrowserModule, FormsModule),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorBasicAuthService,
      multi: true,
    },
  ],
};
