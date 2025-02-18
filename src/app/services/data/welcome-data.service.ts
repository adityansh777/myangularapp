// src/app/services/welcome-data.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  // Return the Observable from the HttpClient
  executeHelloWorldBeanService(): Observable<any> {
    return this.http.get('http://localhost:8080/hello-world-bean');
  }
}
