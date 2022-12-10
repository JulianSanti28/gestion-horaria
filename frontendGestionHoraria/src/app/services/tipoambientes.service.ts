import { Injectable } from '@angular/core';
import { TipoAmbiente } from '../models/tipoAmbiente.model';

@Injectable({
  providedIn: 'root'
})
export class TipoambientesService {

  //traer todos los tipos de ambientes
  tipoAmbientes:TipoAmbiente[]=[
    {idTipoAmbiente:'1',nombreTipoAmbiente:'salon'},
    {idTipoAmbiente:'2',nombreTipoAmbiente:'laboratorio'}
  ]
  constructor() { }

  //traer todos los ambientes
  getAllTipoAmbientes(){
    return this.tipoAmbientes;
  }
}
