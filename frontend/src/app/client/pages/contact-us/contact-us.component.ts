import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactUsService } from 'src/app/shared/services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, OnDestroy {

    contactUsForm!: FormGroup;
    statusMessage: string= '';
    submitted: boolean = false;
    subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private ContactUsService: ContactUsService
  ) { }

    ngOnInit(): void {
        this.contactUsForm = this.formBuilder.group({
            email: ["", [Validators.required, Validators.email]],
            message: [
                "",
                [
                    Validators.required,
                    Validators.minLength(50),
                    Validators.maxLength(500),
                ]
            ],
            phone: [
              "",
              [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
            ],
          });
        }
      
        ngOnDestroy(): void {
          for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
          }
        }
      
        onSubmit() {
          this.submitted = true;
          this.subscriptions.push(
            this.ContactUsService
              .sendContactUs({
                email: this.contactUsForm.value.email,
                message: this.contactUsForm.value.message,
                phone: this.contactUsForm.value.phone,
              })
              .subscribe(
                (res: { [key: string]: string }) => {
                  this.contactUsForm.reset();
                  this.statusMessage = res.statusMessage;
                },
                (res: { [key: string]: string }) => {
                  this.statusMessage = res.statusMessage;
                  this.submitted = false;
                }
              )
          );
        }
      
        get email() {
          return this.contactUsForm.get("email");
        }
      
        get message() {
          return this.contactUsForm.get("message");
        }
      
        get phone() {
          return this.contactUsForm.get("phone");
  }

}
