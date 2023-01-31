import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveToken(token:string){
    console.log("Asignando token en local storage ",token)
    localStorage.setItem('token',token)
  }

  getToken(){
    const token = localStorage.getItem('token')
    console.log("Obteniendo token en auth service ",token)
    return token
  }
  logout(): void {

    localStorage.clear();
    localStorage.removeItem('token');
    
  }
}
