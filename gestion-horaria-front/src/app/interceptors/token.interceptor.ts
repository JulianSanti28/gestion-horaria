import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import {CookiesService} from 'src/app/services/cookies/cookies.service'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private cookiesService: CookiesService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request =this.addToken(request)
    return next.handle(request);
  }

  private addToken(request: HttpRequest<unknown>){
    const token = this.cookiesService.getToken();
    if(token){
      const authRequest = request.clone({
        headers: request.headers.set('Authorization',`Bearer ${token}` )
      });
      return authRequest
    }
    return request
  }
}
