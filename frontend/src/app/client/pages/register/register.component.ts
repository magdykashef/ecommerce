import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/security/auth.service";
import { User } from "src/app/shared/models/user";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage = "";

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([
        localStorage.getItem("role") === "admin" ? "/admin" : "/",
      ]);
    }

    this.registerForm = this.formBuilder.group({
      user_name: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ],
      ],
      first_name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      last_name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$"),
        ],
      ],
      confirmPassword: [
        "",
        [
          Validators.required,
        ],
      ],
      address: ["", [Validators.required, Validators.minLength(10)]],
      phone: [
        "",
        [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      ],
    }, {
        validators: [this.match('password', 'confirmPassword')]
    });
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
    this.authService
      .register({
        user_name: this.registerForm.value.user_name,
        first_name: this.registerForm.value.first_name,
        last_name: this.registerForm.value.last_name,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        address: this.registerForm.value.address,
        phone: this.registerForm.value.phone,
      })
      .subscribe(
        (user: User) => {
          localStorage.setItem("user_id", user.user_id);
          localStorage.setItem("user_name", user.user_name);
          localStorage.setItem("status", user.status);
          localStorage.setItem("role", user.role);
          localStorage.setItem("token", user.token);
          this.router.navigate([
            localStorage.getItem("role") === "admin" ? "/admin" : "/",
          ]);
        },
        (error: any) => {
          this.errorMessage = error || "please fill all fields by required";
        }
      );
  }

  get user_name() {
    return this.registerForm.get("user_name");
  }

  get first_name() {
    return this.registerForm.get("first_name");
  }

  get last_name() {
    return this.registerForm.get("last_name");
  }

  get email() {
    return this.registerForm.get("email");
  }

  get password() {
    return this.registerForm.get("password");
  }

  get confirmPassword() {
    return this.registerForm.get("confirmPassword");
  }

  get address() {
    return this.registerForm.get("address");
  }

  get phone() {
    return this.registerForm.get("phone");
  }
}
