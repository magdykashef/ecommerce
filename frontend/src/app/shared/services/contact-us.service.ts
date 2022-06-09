import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactUsForm } from '../models/contact-us-form';

@Injectable()
export class ContactUs {

    constructor(
        private http: HttpClient,
      ) { }


    sendContactUs(form : ContactUsForm) {
        return this.http.post(`${environment.api}/contact-us`, (form.email, form.message, form.phone));
    }
}
