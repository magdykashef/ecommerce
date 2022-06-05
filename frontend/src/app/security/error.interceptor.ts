
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error) => {
          if ([401, 403].includes(parseInt(error.statusCode))) {
            // 401 Unauthorized or 403 Forbidden
            this.authService.logout();
          }
          return throwError(error.error.message || error.error.error || error.error.statusMessage);
        })
      )
  }
}
