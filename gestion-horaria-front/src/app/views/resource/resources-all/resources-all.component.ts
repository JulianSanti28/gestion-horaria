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
  totalItems:number=1
  paginadorResource:any
  constructor(
    private resourceService: ResourceService
  ){

  }
  ngOnInit(): void {
    this.resources=this.resourceService.getAllResources();
    this.resourceTypes=this.resourceService.getAllResourceTypes();

    //this.totalItems=this.resourceService.getTotalItems()
    this.totalItems=10
  }
  updateTableResource(type:string){
    if(type == 'all'){
      this.resources=this.resourceService.getAllResources();
    }else{
      this.resources=this.resourceService.getResourcesByResourceType(type);
    }
  }

  loadTableResource(args: number[]) {
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
    this.resourceService.getAllEnvironmentsPage(pageSolicitud,pageSize).subscribe((response) =>{

        this.resources = response.content;
        this.paginadorResource=response;
      });
  }
}
