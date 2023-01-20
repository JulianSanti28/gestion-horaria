import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Environment } from 'src/app/models/environment.model';
import { Resource } from 'src/app/models/resource.model';
import { EnvironmentService } from 'src/app/services/environment/environment.service';

@Component({
  selector: 'app-environment-edit',
  templateUrl: './environment-edit.component.html',
  styleUrls: ['./environment-edit.component.scss']
})
export class EnvironmentEditComponent {

  constructor(
    private route:ActivatedRoute,
    private environmentService:EnvironmentService
  ) { }
   //environmentId
   environmentId:number | null = null;
   showEnvironment:string=' ';
    public visible = false;
   environment:Environment ={
    'id':0,
    'name':'',
    'location':'',
    'capacity':0,
    'environmentType':'',
    'facultyId':'',
    'availableResources':[]

   }
   ngOnInit(): void {
     //obteniendo el id de la url debe llamarse igual que en el app-routing

     // this.route.paramMap.pipe(switchMap((params)=>{
     //   this.ambienteId= Number(params.get('idAmbiente'));
     //   if(this.ambienteId){
     //     return this.ambienteService.getByAmbienteId(this.ambienteId);
     //   }
     //   return [null];
     // })
     // ).subscribe((data)=>{
     //   this.ambiente=data;
     // })

     this.route.paramMap.subscribe(
       params=>{this.environmentId= Number(params.get('environmentId'));
       if(this.environmentId!= null ){
         this.environment=this.environmentService.getEnvironmentsByEnvironmentId(this.environmentId);
        // console.log("Respuesta de tener 1 environent : ", this.environmentService.getEnvironmentsByEnvironmentId(this.environmentId))
      }
       else{
         //this.ambiente=null;
       }

     }
     )

     //recursos correspondientes a un ambiente
     //this.recursos= this.recursoService.getRecursosByAmbienteId(this.ambiente.idAmbiente);
   }

   onAddedResource(resource:Resource){
    //agregar resource a la lista del environment que ya esta aqui
    this.environment.availableResources.push(resource)
  }
  getInfo(){
    console.log("Environment : ",this.environment)
    console.log("recursos ",this.environment.availableResources)
    this.showEnvironment= JSON.stringify(this.environment)
    this.visible=true
  }



  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

}
