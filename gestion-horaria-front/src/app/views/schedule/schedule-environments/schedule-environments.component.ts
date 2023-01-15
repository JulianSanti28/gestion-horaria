import { NonNullAssert } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, OnInit, Output, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Environment } from 'src/app/models/environment.model';
import { EnvironmentService } from 'src/app/services/environment/environment.service';

@Component({
  selector: 'app-schedule-environments',
  templateUrl: './schedule-environments.component.html',
  styleUrls: ['./schedule-environments.component.scss']
})
export class ScheduleEnvironmentsComponent implements OnInit {

  environments:Environment[]=[];
  columns:string[]=['Id','Tipo Ambiente','Nombre','Ubicacion','Capacidad','Facultad','Seleccionar'];
  environmentTypes:string[]=[];
  environmentType!: string | null;
  isDisabled:boolean=false;
  isEnvironmentSelected:boolean=false;
  showSelectedEnvironment:boolean=false;
  ambiente!:Environment;
  @Output()selectedEnvironment = new EventEmitter<Environment|null>();
  @ViewChildren("checkboxes") checkboxes!: QueryList<ElementRef>;

  constructor(
    private environmentService : EnvironmentService,
    private render2:Renderer2,
    private route : ActivatedRoute
  ) { }
  ngOnInit(): void {
    if(this.environmentType!= null ){
      this.environments=this.environmentService.getEnvironmentsByEnvironmentType(this.environmentType);

    }
    else{
      this.environments=this.environmentService.getAllEnvironments();
    }

    this.environmentTypes=this.environmentService.getAllEnvironmentTypes();
  }

  updateTableEnvironments(type:string){
    if(type == 'all'){
      this.environments=this.environmentService.getAllEnvironments();
    }else{
      this.environments=this.environmentService.getEnvironmentsByEnvironmentType(type);
    }

  }
  onSelectingEnvironment(environment:Environment, e:Event){

    const x = e.target as HTMLInputElement
    if(x.checked){
      this.ambiente=environment;
      this.selectedEnvironment.emit(environment)
      this.isDisabled=true
      this.showSelectedEnvironment=true;
    }
  }
  changeSelectedEnvironment(){
    this.isDisabled=false
    // this.render2.setAttribute(this.casilla.nativeElement,'checked','false')
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
    this.selectedEnvironment.emit(null)
  }

}
