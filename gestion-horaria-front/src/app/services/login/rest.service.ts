import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpclient: HttpClient) { }

  singin(credential:{email:string,password:string}){
    //return this.httpclient.post('http://localhost:8080/login',{credential})
    return of ({accesstoken:"12345ss"})//convierte cualquier obj a observable
  }

}
