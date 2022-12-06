import { Injectable } from '@angular/core';
import { AmbientesComponent } from '../pages/ambientes/ambientes.component';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {

  ambientes: string[]=['Lab 101','Salon 302']
  constructor() { }

  getAll(){
    //obternet todos los ambientes
  }
  getByAmbienteId(ambienteId:string){
    //obtener un ambiente por ID

    //return this.http.get<Ambiente[]>
  }

  getByTipoAmbiente(tipoAmbiente:string){
    //obtener ambientes por tipo de ambientes
    return this.ambientes;
  }
}
