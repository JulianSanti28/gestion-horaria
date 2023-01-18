import { Component,Input,Output, EventEmitter, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Environment } from 'src/app/models/environment.model';
import { Resource } from 'src/app/models/resource.model';
import {ResourceService} from 'src/app/services/resource/resource.service'
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit,AfterViewChecked{
  resources:Resource[]=[];
  columns:string[]=['Id','Nombre','Tipo recurso','Agregar'];
  colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
  resourceTypes:string[]=[];
  resourceType!: string | null;
  counter:number=0;
  paginadorResource:any
  totalItems:number=1
  @Output() addedResource = new EventEmitter();
  @Output() removeResource=new EventEmitter();
  @Input('isEdit')isEdit!:boolean;
  @Input('environment')environment!:Environment;
  constructor(
    private resourceService:ResourceService,

  ){

  }

  ngOnInit(){
    console.log("los recursos de este ambiente son ",this.environment.availableResources)
    this.resources= this.resourceService.getAllResources();
    this.resourceTypes=this.resourceService.getAllResourceTypes();
    if(this.isEdit==true){
      this.counter=this.environment.availableResources.length

    }else{
      this.counter =0;
    }
    //this.totalItems=this.resourceService.getTotalItems()
    this.totalItems=10
  }
  ngAfterViewChecked(){
    // for (let index = 0; index < this.resources.length; index++) {
    //   this.inResourceList(this.resources[index])

    // }
  }
  inResourceList(resource:Resource){

    if(this.environment.availableResources.find(x=> x.id ==resource.id)!=null){
      return true
    }

     return false
  }
  updateTableResources(type:string){
    // console.log("entra a ng change")
    //update de la tabla haciendo busqueda en un servicio de los recursos que sean de ese tipo seleccionado
    this.resources=this.resourceService.getResourcesByResourceType(type);
  }
  onAddEnvironment(resource:Resource, e:Event){
    // console.log("llega a onAddEnvironment",resource)
    const x = e.target as HTMLInputElement
    if(x.checked){
      this.addedResource.emit(resource)
      this.counter+=1;
    }else if(!x.checked){
      this.removeResource.emit(resource)
      this.counter -=1;
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
