import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Auth} from 'src/app/models/auth.model'
import { AuthService } from '../auth/auth.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  endpPoint='api/auth'
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  singin(credentials:{email:string,password:string}){
    const username = credentials.email
    const password = credentials.password

    return this.http.post<Auth>(`${this.endpPoint}/login`,{username,password})
    .pipe(
      tap(response => {this.authService.saveToken(response.token)})

    )
  }
}
