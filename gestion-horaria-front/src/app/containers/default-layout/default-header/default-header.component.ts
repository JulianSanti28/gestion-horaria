import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService, private cookieService: CookieService, private router: Router) {
    super();
  }

  closeSesion(){
    this.cookieService.delete("token_access")//recom: crear un servicio que tenga el importe de cookies services y tenga los metodos para singin and logaout
    this.router.navigate(['login'])
  }
}
