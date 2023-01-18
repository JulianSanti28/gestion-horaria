import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Environment } from 'src/app/models/environment.model';
import { Resource } from 'src/app/models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(
    private http : HttpClient
  ) { }

  endPoint:String = 'http://localhost:8080/resource'

  resourceTypes:string[]=['TECNOLOGICO','PEDAGOGICO'];
  resources:Resource[]=[
    {'id':1,'name':'Televisor','resourceType':this.resourceTypes[0],'resourceLocations':[]},
    {'id':2,'name':'Computador','resourceType':this.resourceTypes[0],'resourceLocations':[]},
    {'id':3,'name':'Video bean','resourceType':this.resourceTypes[0],'resourceLocations':[]}


  ]
  getAllResources(){
    return this.resources;
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

  getAllRemainingResources(){
    //obtener todos los recursos que no estan en un ambiente
  }
  getResourceByResourceId(idResource:number){
    return this.resources[idResource-1];
  }
  getResourcesByResourceType(resourceType:string){
    return this.resources.filter(reosurce => reosurce.resourceType ==resourceType);
  }

  getAllResourceTypes(){
    return this.resourceTypes;
  }

  pushResourceIntoEnvironment(environment:Environment, resource:Resource){

    //environment.availableResources.push(resource)

  }


}
