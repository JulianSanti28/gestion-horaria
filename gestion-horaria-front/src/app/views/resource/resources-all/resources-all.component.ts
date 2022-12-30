import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/app/models/resource.model';
import { ResourceService } from 'src/app/services/resource/resource.service';

@Component({
  selector: 'app-resources-all',
  templateUrl: './resources-all.component.html',
  styleUrls: ['./resources-all.component.scss']
})
export class ResourcesAllComponent implements OnInit {

  columns:string[]=['Id','Nombre','Tipo Recurso','Editar'];
  resources!:Resource[];
  resourceTypes:string[]=[]

  constructor(
    private resourceService: ResourceService
  ){

  }
  ngOnInit(): void {
    this.resources=this.resourceService.getAllResources();
    this.resourceTypes=this.resourceService.getAllResourceTypes();
  }
  updateTableResource(type:string){
    if(type == 'all'){
      this.resources=this.resourceService.getAllResources();
    }else{
      this.resources=this.resourceService.getResourcesByResourceType(type);
    }
  }
}
