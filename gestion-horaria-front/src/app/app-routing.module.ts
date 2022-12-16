import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AmbientesComponent } from './pages/ambientes/ambientes.component';
import { CargarofertaComponent } from './pages/cargaroferta/cargaroferta.component';
import { AmbienteDetailComponent } from './pages/ambiente-detail/ambiente-detail.component';

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
    path:'ambientes',
    component:AmbientesComponent
  },
  {
    // filtrar por tipo de ambiente
    path:'ambientes/:idTipoAmbiente',
    component:AmbientesComponent
  },
  {
    //detalles de un ambiente
    path:'ambiente/:idAmbiente',
    component:AmbienteDetailComponent
  },
  {
    //detalles de un ambiente cuando se ha filtrado por tipo de ambiente
    path:'ambientes/ambiente/:idAmbiente',
    component:AmbienteDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
