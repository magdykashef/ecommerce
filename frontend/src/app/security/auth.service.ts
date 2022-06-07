import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(email: string, password: string): Observable<User | null> {
    return this.http.post<User>(`${environment.api}/login`, { email, password });
  }

  isLoggedIn(): boolean {
    return !!(
      localStorage.getItem('user_id') && 
      localStorage.getItem('user_name') && 
      localStorage.getItem('status') && 
      localStorage.getItem('role') && 
      localStorage.getItem('token'));
  }

  logout() {
    this.resetCurrentUser();
    this.router.navigate(['/']);
  }

  private resetCurrentUser() {
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_name');
    localStorage.removeItem('status');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}
