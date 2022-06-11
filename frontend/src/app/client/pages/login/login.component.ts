
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../security/auth.service';
import { User } from '../../../shared/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  errorMessage = '';
  submitted = false;
  subscriptions: Subscription[] = [];


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public authService: AuthService,
  ) { }


  ngOnInit(): void {

    if (this.authService.isLoggedIn()) {
      const user: User | null = JSON.parse(localStorage.getItem('user')) || null;
      this.router.navigate([user && user.role === 'admin' ? '/admin' : '/']);
    }

    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ]]
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
      this.authService.login(this.loginForm.value).subscribe(
        (user: User) => {
          this.router.navigate([user.role === 'admin' ? '/admin' : '/']);
        },
        (error: any) => {
          this.errorMessage = error || 'email or Password is wrong';
          this.submitted = false;
        }
      )
    );
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
