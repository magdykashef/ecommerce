
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../security/auth.service';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage = '';


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public authService: AuthService,
  ) { }


  ngOnInit(): void {

    if (this.authService.isLoggedIn()) {
      this.router.navigate([localStorage.getItem('role') === 'admin' ? '/admin' : '/']);
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
    })
  }


  onSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (user: User) => {
        localStorage.setItem('user_id', user.user_id);
        localStorage.setItem('user_name', user.user_name);
        localStorage.setItem('status', user.status);
        localStorage.setItem('role', user.role);
        localStorage.setItem('token', user.token);
        this.router.navigate([localStorage.getItem('role') === 'admin' ? '/admin' : '/']);
      },
      (error: any) => {
        this.errorMessage = error || 'Email or Password is wrong';
      }
    )
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
