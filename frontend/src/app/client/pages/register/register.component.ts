import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../security/auth.service';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm!: FormGroup;
  errorMessage = '';
  submitted = false;
  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      const user: User | null = JSON.parse(localStorage.getItem('user')) || null;
      this.router.navigate([user && user.role === 'admin' ? '/admin' : '/']);
    }

    this.registerForm = this.formBuilder.group({
      user_name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ],
      ],
      first_name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      last_name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
        ],
      ],
      address: ['', [Validators.required, Validators.minLength(10)]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
    }, {
      validators: [this.match('password', 'confirmPassword')]
    });
  }


  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }


  match(password: string, confirmPassword: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(password);
      const checkControl = controls.get(confirmPassword);
      if (checkControl.errors && !checkControl.errors.matching) {
        return null;
      }
      if (control.value !== checkControl.value) {
        controls.get(confirmPassword).setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }

  onSubmit() {
    this.submitted = true;
    this.subscriptions.push(
      this.userService
        .createUser(this.registerForm.value)
        .subscribe(
          (user: User) => {
            this.router.navigate([user.role === 'admin' ? '/admin' : '/']);
          },
          (error: string) => {
            this.errorMessage = error || 'something went wrong, please try again in a few minutes';
            this.submitted = false;
          }
        )
    );
  }

  get user_name() {
    return this.registerForm.get('user_name');
  }

  get first_name() {
    return this.registerForm.get('first_name');
  }

  get last_name() {
    return this.registerForm.get('last_name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get address() {
    return this.registerForm.get('address');
  }

  get phone() {
    return this.registerForm.get('phone');
  }
}
