import { TokenService } from './../core/services/token.service';
import { LoginData } from './../models/rest.models';
import { Router } from '@angular/router';
import { GlobalRestService } from './../core/services/global-rest.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginRestService {

  constructor(
    private globalRest: GlobalRestService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  loginUser(userData: LoginData) {
    return this.globalRest.login(userData).subscribe({
      next: (response) => {
        this.tokenService.setToken(response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        this.goToHome();
      }
    });
  }

  goToHome() {
    this.router.navigate(['main']);
  }
}
