import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user: User | undefined = JSON.parse(localStorage.getItem('user'));
    const token = user.token;
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
    });

    if (token) {
      const newRequest = request.clone({
        headers: headers,
        withCredentials: true
      });

      return next.handle(newRequest);
    }

    return next.handle(request);
  }
}
