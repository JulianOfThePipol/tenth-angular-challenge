import { TokenService } from './../core/services/token.service';
import { LoginData } from './../models/rest.models';
import { Router } from '@angular/router';
import { GlobalRestService } from './../core/services/global-rest.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginRestService {
  constructor(private globalRest: GlobalRestService) {}

  loginUser(userData: LoginData) {
    return this.globalRest.login(userData);
  }
}
