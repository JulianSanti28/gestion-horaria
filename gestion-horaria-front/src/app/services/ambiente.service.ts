import { Injectable } from '@angular/core';
import { Ambiente } from '../models/ambiente.model';
import { AmbientesComponent } from '../pages/ambientes/ambientes.component';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {


  ambientes:Ambiente[]=[
    {id:1, nombre:'salon fundador',ubicacion:'Humanidades',capacidad:30,descripcion:'salon',tipoAmbiente:{idTipoAmbiente:'1',nombreTipoAmbiente:'salon'}},
    {id:2, nombre:'salon entral',ubicacion:'Humanidades',capacidad:25,descripcion:'salon',tipoAmbiente:{idTipoAmbiente:'1',nombreTipoAmbiente:'salon audiovisual'}},
    {id:3, nombre:'laboratorio',ubicacion:'Humanidades',capacidad:20,descripcion:'laboratorio',tipoAmbiente:{idTipoAmbiente:'2',nombreTipoAmbiente:'laboratorio'}},
    {id:4, nombre:'super laboratorio',ubicacion:'Humanidades',capacidad:20,descripcion:'laboratorio',tipoAmbiente:{idTipoAmbiente:'2',nombreTipoAmbiente:'laboratorio'}}

  ]
  constructor() { }

  getAll(){
    //obternet todos los ambientes
    return this.ambientes;
  }
  getByAmbienteId(idAmbiente:number){
    //obtener un ambiente por ID

    //return this.http.get<Ambiente>(`${this.apiUrl}/ambientes/${id}`)

    return this.ambientes[idAmbiente-1];
  }

  getByTipoAmbienteId(idTipoAmbiente:string){
    //obtener ambientes por tipo de ambientes
    return this.ambientes.filter(ambiente => ambiente.tipoAmbiente.idTipoAmbiente ==idTipoAmbiente);
  }
  updateAmbiente(id:string , ambiente:Ambiente){
    return ambiente;
  }
}
