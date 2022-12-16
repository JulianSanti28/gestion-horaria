import { Injectable } from '@angular/core';
import { Recurso } from '../models/recurso.model';
import { AmbienteRecurso } from '../models/ambienteRecurso.model';
@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  constructor() { }

  recursos:Recurso[]=[
    {'idRecurso':1,'nombre':'Televisor','tipoRecurso':{'idTipoRecurso':1,'nombreTipoRecurso':'tecnologico'}},
    {'idRecurso':2,'nombre':'Computador','tipoRecurso':{'idTipoRecurso':1,'nombreTipoRecurso':'tecnologico'}}

  ]

  recursosInAmbiente:AmbienteRecurso[]=[
    {'idAmbienteRecurso':1,'idAmbiente':1,'idRecurso':1},
    {'idAmbienteRecurso':2,'idAmbiente':1,'idRecurso':2},
    {'idAmbienteRecurso':3,'idAmbiente':2,'idRecurso':1},
    {'idAmbienteRecurso':4,'idAmbiente':2,'idRecurso':2},
    {'idAmbienteRecurso':5,'idAmbiente':3,'idRecurso':1},
    {'idAmbienteRecurso':6,'idAmbiente':3,'idRecurso':2}
  ]
  resultado:Recurso[]=[];
  idAmb :number=0;
  getRecursosByAmbienteId(idAmbiente:number){

    // Recursos que se encuentran en un ambiente
    //consultar tabla
    console.log("Id ambiente es ",idAmbiente);
    this.idAmb=idAmbiente;
    const arr2=this.recursosInAmbiente.filter(recursos => recursos.idAmbiente ==idAmbiente);

    for (let recurso of this.recursos){
      for(let element of arr2 ){
        if(recurso.idRecurso==element.idRecurso){
          this.resultado.push(recurso);
        }
      }

    }
    return  this.resultado;
  }
  saveRecurso(recurso: Recurso){
    console.log("apunto de guardar un recurso en ambiente recursos",this.recursos.length)
    console.log("ambiente recursos",this.recursosInAmbiente.length)
    const nextId= this.recursos.length+1;
    const nextIdAR = this.recursosInAmbiente.length+1;
    recurso.idRecurso=nextId;
    recurso.tipoRecurso={'idTipoRecurso':3,'nombreTipoRecurso':recurso.tipoRecurso.nombreTipoRecurso}
    this.recursos.push(recurso);
    this.recursosInAmbiente.push(
      {'idAmbienteRecurso':nextIdAR,'idAmbiente':this.idAmb,'idRecurso':recurso.idRecurso}
    );
    console.log("Despues de guardar recurso en ambiente recursos",this.recursos.length);
    console.log("ambiente recursos",this.recursosInAmbiente.length)
    console.log(this.recursosInAmbiente);

  }

  getNextIdTipoRecurso(){
    return 3;
  }
}
