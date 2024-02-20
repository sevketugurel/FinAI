import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RegisterModel } from '../models/register-form.interface';
import { LoginService } from '../services/login.service';
import { GlobalKeys } from '../models/global-keys.enum';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(7)]);

  isDisable(): boolean {
    return !(this.registerForm.valid)

  }; constructor(private _router: Router, private _loginServices: LoginService,  private _cdr: ChangeDetectorRef) { }


  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.minLength(5), Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    passwordAgain: new FormControl("", [Validators.required, Validators.minLength(8)]),
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    surName: new FormControl("", [Validators.required, Validators.minLength(3)]),

  },)
  ngOnInit() {
    this._formChanges();
  }

  private _formChanges() {
    this.registerForm.get("password")?.valueChanges.subscribe(x => {
      this.checkEqualpassword();
    })
    this.registerForm.get("passwordAgain")?.valueChanges.subscribe(x => {
      this.checkEqualpassword();
    })
  }
  
  


  checkEqualpassword() {
    if ((this.registerForm.get("password")?.value !== this.registerForm.get("passwordAgain")?.value)) {
      this.registerForm.get("password")?.setErrors({ missmatch: true });
      this.registerForm.get("passwordAgain")?.setErrors({ missmatch: true });
      this.registerForm.updateValueAndValidity();
      this._cdr.markForCheck();
    } else {
      this.registerForm.get("password")?.setErrors(null);
      this.registerForm.get("passwordAgain")?.setErrors(null);
      this.registerForm.updateValueAndValidity();
      this._cdr.markForCheck();
    }
  }
  

  private _getRegisterForm(formName: string, errorType: string) {

    return (this.registerForm.get(formName)?.hasError(errorType));

  }

  isDisableForFormGroup(): boolean {
    return this.registerForm.valid;
  }

  goToLogin(): void {
    this._router.navigateByUrl("/login");
  }

  getFormNameInvalid(formName: string): boolean | undefined {
    return this.registerForm.get(formName)?.invalid;
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
  register() {
    const payload: RegisterModel | any = this.registerForm.value;
    this._loginServices.register(payload);
  }

}
