import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu=false; // el menu no se muestra
  counter=0;
  profile: User| null=null;
  constructor(
    private userService:UserService,
    private authService :AuthService
    ) { }

  ngOnInit(): void {


  }

  toggleMenu(){
    this.activeMenu=!this.activeMenu;
  }
  login(){
    this.createUser();
    this.authService.loginAndGet('pau@mail.com','123')
    .subscribe(user => {
      this.profile = user;
    });
  }

  createUser(){
    this.userService.create({name:'Pau',email:'pau@mail.com',password:'123'})
    .subscribe(rta=> {
      console.log(rta);
    });
  }
  // getProfile(){
  //   this.authService.profile()
  //   .subscribe(user=> {
  //     console.log(user);
  //     this.profile=user;
  //   });
  // }
}
