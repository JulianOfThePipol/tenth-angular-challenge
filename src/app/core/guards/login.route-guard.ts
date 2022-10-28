import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { UrlTree, CanLoad, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad{

  constructor(
    private router: Router,
    private TokenService: TokenService
    ) {}

  canLoad(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.TokenService.getToken()) {
      this.router.navigate(['/main']);
      return false;
    } else {
      return true;
    }
  }
};
