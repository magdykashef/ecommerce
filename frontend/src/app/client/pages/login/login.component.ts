
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../security/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage = '';


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }


  ngOnInit(): void {

    if (this.authService.isLoggedIn()) {
      this.router.navigate([localStorage.getItem('role') === 'admin' ? '/admin' : '/']);
    }

    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
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
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      (user: User) => {
        localStorage.setItem('username', user.username);
        localStorage.setItem('role', user.role);
        localStorage.setItem('token', user.token);
        this.router.navigate(['/']);
      },
      (error: any) => {
        this.errorMessage = error || 'username or password is wrong';
      }
    )
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
