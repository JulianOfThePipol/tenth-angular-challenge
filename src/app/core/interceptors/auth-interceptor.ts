import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let mainToken = this.tokenService.getToken()
    if (!mainToken) {
      return next.handle(req);
    };
    if (!req.headers.has('authorization')) {
      return next.handle(this.addTokenToHeader(req,mainToken));     
    };
    return next.handle(req);
  }

  private addTokenToHeader (request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
  };
}
