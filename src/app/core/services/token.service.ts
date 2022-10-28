import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  JWTHelper = new JwtHelperService()
  tokenKey = 'token'
  constructor() { }

  setToken (token: string) {
    return localStorage.setItem(this.tokenKey, token);
  }

  getToken () {
    return localStorage.getItem(this.tokenKey)
  }

  deleteToken (){
    localStorage.removeItem(this.tokenKey)
  }
  decodeToken (token:string) {
    let decoded
    try {
      decoded = this.getToken() 
    } catch (error) {
      decoded = null
    }
    if (decoded) {
      return this.JWTHelper.decodeToken(token)
    }
    return {
      sub: 0,
      username: '',
      email: '',
      iat:0,
      exp:0,
    }
  }
}
