import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<{ id: string, name: string }[]> {
    return this.httpClient.get<{ id: string, name: string }[]>(`${environment.api}/category/index`);
  }


  getCategory(id: string): Observable<{ id: string, name: string }> {
    return this.httpClient.get<{ id: string, name: string }>(`${environment.api}/category/show/${id}`);
  }


  createCategory(name: string): Observable<{ id: string, name: string }> {
    return this.httpClient.post<{ id: string, name: string }>(`${environment.api}/category/create`, { name });
  }


  updateCategory(id: string, name: string): Observable<{ id: string, name: string }> {
    return this.httpClient.patch<{ id: string, name: string }>(`${environment.api}/category/update/${id}`, { name });
  }


  deleteCategory(id: string): Observable<{ id: string, name: string }> {
    return this.httpClient.delete<{ id: string, name: string }>(`${environment.api}/category/delete/${id}`);
  }
}
