import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AmbientesComponent } from './pages/ambientes/ambientes.component';
import { CargarofertaComponent } from './pages/cargaroferta/cargaroferta.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent

  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'cargaroferta',
    component:CargarofertaComponent
  },
  {
    path:'registro',
    component:RegisterComponent
  },
  {
    path:'ambientes/:idTipoAmbiente',
    component:AmbientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
