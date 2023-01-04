import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Environment } from 'src/app/models/environment.model';
import { EnvironmentService } from 'src/app/services/environment/environment.service';

@Component({
  selector: 'app-environments-from-resource',
  templateUrl: './environments-from-resource.component.html',
  styleUrls: ['./environments-from-resource.component.scss']
})
export class EnvironmentsFromResourceComponent {

  environments:Environment[]=[];
  columns:string[]=['Id','Tipo Ambiente','Nombre','Ubicacion','Capacidad','Facultad'];
  environmentTypes:string[]=[];
  environmentType!: string | null;

  @Input('resourceId') resourceId:number=0;
  constructor(
    private environmentService : EnvironmentService,
    private route : ActivatedRoute
  ) { }
  ngOnInit(): void {
    //todos los ambientes
    //obteniendo el id de la url debe llamarse igual que en el app-routing

    this.environments = this.environmentService.getEnvironmentsFromResource(this.resourceId);
    console.log(this.environments)
    //todos  los tipos de ambientes
    this.environmentTypes=this.environmentService.getAllEnvironmentTypes();
  }

  updateTableEnvironments(type:string){
    if(type == 'all'){
      this.environments=this.environmentService.getEnvironmentsFromResource(this.resourceId);
    }else{
      this.environments=this.environmentService.getEnvironmentsFromResourceAndResourceType(this.resourceId,type);
    }

  }
}
