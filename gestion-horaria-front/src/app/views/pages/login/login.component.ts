import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormsModule,ReactiveFormsModule, FormGroup } from '@angular/forms';
import { access } from 'fs';
import { CookieService } from 'ngx-cookie-service';

import { navItems } from 'src/app/containers/default-layout/_nav';
import {CookiesService} from 'src/app/services/cookies/cookies.service'
import { Router } from '@angular/router';
import { RestService} from '../../../services/login/rest.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public navItems = navItems;
  public formlogin!: FormGroup;
  buttontouched!: boolean;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(
    private fromBuilder: FormBuilder,
    private RestService: RestService,
    private cookieService: CookieService,
    private router: Router,
    private serviceCookie: CookiesService
    ) {
     }

  ngOnInit(): void {
    this.buttontouched = false
    this.formlogin = this.fromBuilder.group({
      //email:['',[Validators.required,Validators.email]],
      username:['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  enviarDatos(): any {
    this.buttontouched = true
    console.log("En enviar datos ",this.formlogin.value)
    if(!this.formlogin.valid) return
    this.RestService.singin(this.formlogin.value).subscribe((res:any)=>{
      console.log('Login exitoso!');
      console.log("Res ",res)

      // setTimeout(() => {
        console.log("entra aqui set Timeout")
        this.router.navigate(['dashboard'])
        // this.router.navigateByUrl('404');
        console.log("Returning cookie ",this.serviceCookie.getToken())
      // });

    })
  }

  getError(controlname:string){
    let control = this.formlogin.get(controlname)
    if(control?.hasError("required")) return "campo obligatorio."
    if(control?.hasError("username")) return "ingrese un correo valido."
    return ""
  }

}
