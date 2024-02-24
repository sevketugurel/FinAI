import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { log } from 'console';
import { RegisterModel } from '../models/register-form.interface';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, ReactiveFormsModule, SidebarComponent]
})
export class LoginPageComponent {
  isLogin: Boolean = true;
  emailFormControl: any;
  passwordFormControl: any;
  constructor(private _router: Router, private _loginService: LoginService) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  goToRegisterpage() {
    this._router.navigateByUrl('/register');
  }

  isDisable(): boolean {
    return !(this.emailFormControl.valid && this.passwordFormControl.valid);

  }

  clickedSignIn() {
    this.login();
    if (this.isLogin) {
      this._router.navigateByUrl("dashboard");
      this._loginService.isLogin = true;
    }
  }

  login() {
    const users: RegisterModel[] = this._loginService.getUsers();


    users.forEach(user => {
      if (user.email === this.loginForm.get('email')?.value && user.password === this.loginForm.get('password')?.value) {
        this._loginService.login(this.loginForm.value);
        this.isLogin = true;
      }
    });


    if (!this.isLogin) {
      window.alert('Hatalı Giriş!');
    }
  }
  private _getRegisterForm(formName: string, errorType: string) {

    return (this.loginForm.get(formName)?.hasError(errorType));

  }

  getFormNameInvalid(formName: string): boolean | undefined {
    return this.loginForm.get(formName)?.invalid;
  }

  getErrorMessage(formName: string): string {
    if (this._getRegisterForm(formName, 'required')) {
      return 'Zorunlu alan!';
    } else if (this._getRegisterForm(formName, 'minlength')) {
      return 'Min karakter sayısını geçiniz';
    } else if (this._getRegisterForm(formName, 'email')) {
      return 'Geçerli değer giriniz.';
    } else if (this._getRegisterForm(formName, 'maxlength')) {
      return 'Max karakter sayısını geçtiniz';
    } else if (this._getRegisterForm(formName, 'missmatch')) {
      return 'şifreler aynı değil!';
    } else return '';
  }
}
