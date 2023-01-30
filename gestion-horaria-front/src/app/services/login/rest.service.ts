import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { switchMap,tap,map } from 'rxjs';
import {CookiesService} from 'src/app/services/cookies/cookies.service'
import {Auth} from 'src/app/models/auth.model'
import { timeStamp } from 'console';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  endPoint:string = "api/auth"
  constructor(
    private http: HttpClient,
    private cookieService : CookiesService
    ) { }


  singin(credential:{username:string,password:string}){
    console.log("ingresa a sing in service en restservice")

    return this.http.post<Auth>(this.endPoint+'/login',{credential})
    .pipe(
      tap(response => this.cookieService.saveToken(response.access_token))

    );
    
    //return of ({accesstoken:"12345ss"})//convierte cualquier obj a observable

  }

}
