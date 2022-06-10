import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
    });

    if(token){
      const newRequest = request.clone({
        headers: headers,
        withCredentials: true
      });

      return next.handle(newRequest);
    }
    
    return next.handle(request);
  }
}
