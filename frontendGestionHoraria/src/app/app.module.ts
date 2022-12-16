import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AmbienteComponent } from './components/ambiente/ambiente.component';
import { TablerowComponent } from './components/tablerow/tablerow.component';
import { AmbientescompComponent } from './components/ambientescomp/ambientescomp.component';

import { TokenInterceptor } from './interceptors/token.interceptor';
import { CauploadComponent } from './components/caupload/caupload.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AmbientesComponent } from './pages/ambientes/ambientes.component';
import { CargarofertaComponent } from './pages/cargaroferta/cargaroferta.component';
import { NavambientesComponent } from './components/navambientes/navambientes.component';
import { AmbienteDetailComponent } from './pages/ambiente-detail/ambiente-detail.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CauploadComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AmbientesComponent,
    CargarofertaComponent,
    AmbienteComponent,
    TablerowComponent,
    AmbientescompComponent,
    NavambientesComponent,
    AmbienteDetailComponent,
    BasicFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
