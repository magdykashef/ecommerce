import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.api}/user/index`);
  }


  getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.api}/user/show/${id}`);
  }


  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${environment.api}/user/create`, {
      user_name: user.user_name,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      address: user.address,
      phone: user.phone
    });
  }


  updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.patch<User>(`${environment.api}/user/update/${id}`, {
      user_name: user.user_name,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      address: user.address,
      phone: user.phone
    });
  }


  deleteUser(id: string): Observable<User> {
    return this.httpClient.delete<User>(`${environment.api}/user/delete/${id}`);
  }
}
