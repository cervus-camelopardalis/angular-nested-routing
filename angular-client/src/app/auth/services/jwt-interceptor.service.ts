import { Injectable } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /* (5) Get user JWT from localStorage */
    const getUserJWT = localStorage.getItem('jwt');

    const tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + getUserJWT /* (6) Include JWT as the Authorization header in any(!) HTTP request that is sent */
      }
    });

    return next.handle(tokenizedRequest); /* (7) Send tokenized request (i.e., req --> include JWT via interceptor --> req.clone) */

  }

  constructor() { }
  
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }
];