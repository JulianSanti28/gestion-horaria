import { Injectable } from '@angular/core';
import { Environment } from 'src/app/models/environment.model';
import { Faculty } from 'src/app/models/faculty.model';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  faculty:Faculty={facultyId:1,facultyName:'Ciencias humanas',departments:[],environments:[]}
  environments:Environment[]=[
    {id:1,name:'Salon fundador',location:'Bloque C',capacity:30,environmentType:'SALON',faculty:this.faculty,availableResources:[]},
    {id:2,name:'Salon prueba',location:'Bloque D',capacity:30,environmentType:'AUDITORIO',faculty:this.faculty,availableResources:[]},
    {id:3,name:'Salon prueba',location:'Bloque D',capacity:30,environmentType:'SALON',faculty:this.faculty,availableResources:[
      {'id':2,'name':'Computador','resourceType':'TECNOLOGICO','resourceLocations':[]},
      {'id':3,'name':'Video bean','resourceType':'TECNOLOGICO','resourceLocations':[]}
    ]},


  ]
  environmentTypes=['all','AUDITORIO', 'LABORATORIO', 'SALON'];
  facultys=[this.faculty];
  constructor() { }

  getAllEnvironments(){
    return this.environments;
  }
  getEnvironmentsByEnvironmentType(type:string){

    //consultar servicio para obtener los ambientes por tipos
    return this.environments.filter(ambiente=>ambiente.environmentType == type);
  }
  getEnvironmentsByEnvironmentId(environmentId:number){
    //consultar servicio para traer un ambiente
    return this.environments[environmentId-1];
  }

  getAllEnvironmentTypes(){
    return this.environmentTypes;
  }

  getAllFacultys(){
    return this.facultys;
  }

  addResourceToEnvironment(){

  }
}

