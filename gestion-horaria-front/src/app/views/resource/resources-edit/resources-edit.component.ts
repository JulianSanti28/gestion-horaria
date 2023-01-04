import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from 'src/app/models/resource.model';
import { ResourceService } from 'src/app/services/resource/resource.service';

@Component({
  selector: 'app-resources-edit',
  templateUrl: './resources-edit.component.html',
  styleUrls: ['./resources-edit.component.scss']
})
export class ResourcesEditComponent {

  showEnvironments:boolean=false;
  resource:Resource={
    'id':0,
    'name':'',
    'resourceType':'',
    'resourceLocations':[]
  }
  resourceId:number=0;
  constructor(
    private route:ActivatedRoute,
    private resourceService:ResourceService
  ) { }
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
      params=>{this.resourceId= Number(params.get('resourceId'));
      if(this.resourceId!= null ){
        this.resource=this.resourceService.getResourceByResourceId(this.resourceId);
      }
      else{
        //this.ambiente=null;
      }

    }
    )

    //recursos correspondientes a un ambiente
    //this.recursos= this.recursoService.getRecursosByAmbienteId(this.ambiente.idAmbiente);
  }

  getInfoRecurso(){

  }
  onShowEnvironments(){
    this.showEnvironments=true;
  }
}
