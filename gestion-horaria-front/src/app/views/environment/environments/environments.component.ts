import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlicePipe } from '@angular/common';

import {Environment} from 'src/app/models/environment.model'
import {EnvironmentService} from 'src/app/services/environment/environment.service'
import { HttpClient } from '@angular/common/http';
import { ignoreElements } from 'rxjs';
@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.scss'],
  providers:[SlicePipe]
})
export class EnvironmentsComponent {

  environments:Environment[]=[];
  columns:string[]=['Id','Tipo Ambiente','Nombre','Ubicacion','Capacidad','Facultad','Editar','Recursos'];
  environmentTypes:string[]=[];
  environmentType!: string | null;
  totalItems:number=1;
  paginadorEnvironment: any;


  @Input('fromResource') fromResource:boolean=false;
  @Input('resourceId') resourceId:number=0;


  constructor(
    private environmentService : EnvironmentService,
    private route : ActivatedRoute
  ) { }
  ngOnInit(): void {
    //todos los ambientes
    //obteniendo el id de la url debe llamarse igual que en el app-routing
    if(this.fromResource==true){
      this.environments = this.environmentService.getEnvironmentsFromResource(this.resourceId);
    }else {
      this.route.paramMap.subscribe(
        params=> {this.environmentType=params.get('environmentType');
        if(this.environmentType!= null ){
          this.environments=this.environmentService.getEnvironmentsByEnvironmentType(this.environmentType);

        }
        else{
          this.environments=this.environmentService.getAllEnvironments();
        }

      }
      )
    }

    // this.totalItems=this.environmentService.getTotalItems()
    this.totalItems=10

    //todos  los tipos de ambientes
    this.environmentTypes=this.environmentService.getAllEnvironmentTypes();
  }

  updateTableEnvironments(type:string){
    if(type == 'all'){
      this.environments=this.environmentService.getAllEnvironments();
    }else{
      this.environments=this.environmentService.getEnvironmentsByEnvironmentType(type);
    }

  }

  // aqui viene el numero de pagina solicitada y el tamaño que debe tener
  loadTableEnvironments(args: number[]) {
    //this.http.get(`http://localhost:8080/users?page=${page}&size=${this.paginationConfig.itemsPerPage}`)
    //this.http.get(this.endPoint+`?page=${page}&size=${this.itemsPerPage}`)
    let pageSolicitud:number = args[0];
    let pageSize: number = args[1]
      if(!pageSolicitud){
        pageSolicitud = 0;
      }
      if(!pageSize){
        pageSize=10
      }
    this.environmentService.getAllEnvironmentsPage(pageSolicitud,pageSize).subscribe((response) =>{

        this.environments = response.content;
        this.paginadorEnvironment=response;
      });
  }
  onPageChange(event:any){

  }
}
