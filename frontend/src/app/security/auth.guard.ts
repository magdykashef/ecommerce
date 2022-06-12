import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private route: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isLoggedIn()) {
      const user: User | undefined = JSON.parse(localStorage.getItem('user')) || undefined;

      if (route.data.roles && user && !route.data.roles.includes(user.role)) {
        // user not authorised
        console.log('user not authorised redirecting to home page');
        this.route.navigate(['/']);
        return false;
      }
      return true;
    }

    // not loggedin
    console.log('not loggedin redirecting to login page');
    this.route.navigate(['/login']);
    return false;
  }



}
