import { HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { TokenService } from './../core/services/token.service';
import { Router } from '@angular/router';
import { LoginRestService } from './login-rest.service';
import { Component, ErrorHandler } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  passwordShown = false;
  loading = false;
  loginForm = new FormGroup ({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      Validators.email
    ]),
    password: new FormControl ('', [
      Validators.required,
      Validators.maxLength(100)
    ]),
  })

  get email ():AbstractControl<any> | null {
    return this.loginForm.get('email');
  };

  get password ():AbstractControl<any> | null {
    return this.loginForm.get('password');
  };

  constructor (
    private restService: LoginRestService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  onSubmit ():void {
    this.loading = true
     this.restService.loginUser({
      "email": this.email?.value as string,
      "password": this.password?.value as string
    }).subscribe({
      next: (response) => {
        this.tokenService.setToken(response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        this.goToHome();
      },
      error: (error) => {
        this.loading = false
        throw new HttpErrorResponse(error)
      }
    });
  };

  toggleVisibility ():void {
    this.passwordShown= !this.passwordShown;
  };

    
  goToHome() {
    this.router.navigate(['main']);
  }
}
