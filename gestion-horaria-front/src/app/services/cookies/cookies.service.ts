import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  expirationDate=1
  constructor(private cookieService:CookieService) {
   }
   test(){
    console.log("En cookie service", this.cookieService)
   }

   saveToken(token:string){
    this.cookieService.set('token', token, this.expirationDate);

   }
   getToken(){
    const token = this.cookieService.get('token')
    return token
   }

}
