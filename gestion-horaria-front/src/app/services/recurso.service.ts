import { Injectable } from '@angular/core';
import { Recurso } from '../models/recurso.model';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  constructor() { }

  recursos:Recurso[]=[
    {'id':1,'nombre':'Televisor','tipoRecurso':{'idTipoRecurso':1,'nombreTipoRecurso':'tecnologico'}},
    {'id':2,'nombre':'Computador','tipoRecurso':{'idTipoRecurso':1,'nombreTipoRecurso':'tecnologico'}}

  ]
  getRecursosByAmbienteId(idAmbiente:number){

    // Recursos que se encuentran en un ambiente
    //consultar tabla
    return this.recursos;
  }
}
