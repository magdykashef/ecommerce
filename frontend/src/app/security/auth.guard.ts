import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
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
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isLoggedIn()) {
      if (route.data.roles && !route.data.roles.includes(localStorage.getItem('role'))) {
        // user not authorised
        console.log('user not authorised redirecting to home page');
        this.route.navigate(['/']);
        return false;
      }
      return true;
    }

    // not loggedin
    console.log('not loggedin redirecting to login page');
    this.route.navigate(['/login'])
    return false;
  }


}
