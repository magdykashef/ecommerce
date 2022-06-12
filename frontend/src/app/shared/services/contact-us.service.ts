import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ContactUsForm } from '../models/contact-us-form';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) { }

  sendContactUs(contactUsForm: ContactUsForm): Observable<{ [key: string]: string }> {
    return this.http.post<{ [key: string]: string }>(`${environment.api}/contact-us`, contactUsForm);
  }
}
