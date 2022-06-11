import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<User>;
  public userSubject: BehaviorSubject<User>;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')) || null);
    this.user$ = this.userSubject.asObservable();
    this.userSubject.next(JSON.parse(localStorage.getItem('user')) || null);
  }

  login(loginData: { email: string, password: string }): Observable<User | null> {
    return this.http.post<User>(`${environment.api}/authenticate`, loginData)
      .pipe(tap((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
      }));
  }


  isLoggedIn(): boolean {
    const user: User | null = JSON.parse(localStorage.getItem('user')) || null;
    return !!(user && user.user_id && user.user_name && user.role && user.status && user.token);
  }

  logout() {
    this.resetCurrentUser();
    this.router.navigate(['/']);
  }

  private resetCurrentUser() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}
