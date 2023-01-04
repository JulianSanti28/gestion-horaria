import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Environment} from 'src/app/models/environment.model'
import {EnvironmentService} from 'src/app/services/environment/environment.service'
@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.scss']
})
export class EnvironmentsComponent {

  environments:Environment[]=[];
  columns:string[]=['Id','Tipo Ambiente','Nombre','Ubicacion','Capacidad','Facultad','Editar','Recursos'];
  colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
  environmentTypes:string[]=[];
  environmentType!: string | null;

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
}
