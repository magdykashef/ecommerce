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

  login(username: string, password:string): Observable<User | null>{
    return this.http.post<User>(`${environment.api}/login`,{username, password});
  }

  isLoggedIn(): boolean{
    return !!(localStorage.getItem('username') && localStorage.getItem('role') && localStorage.getItem('token'));
  }

  logout(){
    this.resetCurrentUser();
    this.router.navigate(['/']);
  }

  private resetCurrentUser(){
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}
