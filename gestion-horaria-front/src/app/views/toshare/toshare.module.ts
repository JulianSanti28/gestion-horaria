import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToshareRoutingModule } from './toshare-routing.module';
import { PaginadorComponent } from './paginador/paginador.component';
import {
  PaginationModule
}from '@coreui/angular'

@NgModule({
  declarations: [
    PaginadorComponent
  ],
  imports: [
    CommonModule,
    ToshareRoutingModule,
    PaginationModule
  ],
  exports:[
    PaginadorComponent
  ]
})
export class ToshareModule { }
