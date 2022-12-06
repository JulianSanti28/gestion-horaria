import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token:string){
    console.log(`token desde token service ${token} `)
    localStorage.setItem('token', token);
  }
  getToken(){
    const token = localStorage.getItem('token');
    console.log('Obteniendo token en token service '+token);
    return token;
  }
}
