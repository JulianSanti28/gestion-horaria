import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Environment } from 'src/app/models/environment.model';
import { Faculty } from 'src/app/models/faculty.model';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  faculty:Faculty={facultyId:1,facultyName:'Ciencias humanas',departments:[],environments:[]}
  environments:Environment[]=[
    {id:1,name:'Salon fundador',location:'Bloque C',capacity:30,environmentType:'SALON',faculty:this.faculty,availableResources:[]},
    {id:2,name:'Salon prueba',location:'Bloque D',capacity:30,environmentType:'AUDITORIO',faculty:this.faculty,availableResources:[
      {'id':3,'name':'Video bean','resourceType':'TECNOLOGICO','resourceLocations':[]}
    ]},
    {id:3,name:'Salon prueba',location:'Bloque D',capacity:30,environmentType:'SALON',faculty:this.faculty,availableResources:[
      {'id':2,'name':'Computador','resourceType':'TECNOLOGICO','resourceLocations':[]},
      {'id':3,'name':'Video bean','resourceType':'TECNOLOGICO','resourceLocations':[]}
    ]},
  ]

  environmentTypes=['all','AUDITORIO', 'LABORATORIO', 'SALON'];
  facultys=[this.faculty];
  endPoint:String = 'http://localhost:8080/environment'
  itemsPerPage:number =10;

  constructor(
    private http : HttpClient
  ) { }
  ngOnInit(){
    //llamar metodo para cargar todos los tipos de ambientes
    //this.loadEnvironmentTypes();



  }

  getAllEnvironmentsPage(page:number, pageSize:number):Observable<any>{
    console.log("llegan page y size ",page, " ", pageSize)
    //{ headers: this.userServie.agregarAuthorizationHeader() }
    return this.http.get<any>(this.endPoint+`?page=${page}&size=${pageSize}`).pipe(
      catchError((e) => {
        // this.router.navigate(['/documentos']);

        console.log('Error obteniendo todos los ambientes', e.error.mensaje, 'error');
        return throwError(e);

      })
    );
  }
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

  getEnvironmentsFromResource(resourceId:number){
    const enviroments:Environment[]=[];
    for (let index = 0; index < this.environments.length; index++) {
      for (let j = 0; j < this.environments[index].availableResources.length; j++) {
        if(this.environments[index].availableResources[j].id==resourceId){
          enviroments.push(this.environments[index])
        }

      }

    }
    //obtener todos los ambientes que contengan al recurso que llega
    //return this.environments.filter(ambiente => ambiente.availableResources.filter(x=> x.id ==resourceId))
    return enviroments
  }
  getEnvironmentsFromResourceAndResourceType(resourceId:number,resourceType:string){
    //llamado desde resources
    //traer los ambientes que contienen un tipo de recurso especifico y ademas contienen el recurso especifico
    const environments=this.getEnvironmentsFromResource(resourceId) ;
    return environments.filter(ambiente=>ambiente.environmentType == resourceType)
  }

  addResourceToEnvironment(){

  }
}

