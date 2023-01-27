import { Component, Output,EventEmitter, Input } from '@angular/core';
import { Environment } from 'src/app/models/environment.model';
import {Schedule} from 'src/app/models/schedule.model'
import {ScheduleService} from 'src/app/services/schedule/schedule.service'

@Component({
  selector: 'app-schedule-time-all',
  templateUrl: './schedule-time-all.component.html',
  styleUrls: ['./schedule-time-all.component.scss']
})
export class ScheduleTimeAllComponent {

  columns:string[]=["Id","Dia","Hora Inicio","Hora Fin","Seleccionado"]
  showSelectedSchedule:boolean=false;
  availableSchedules:Schedule[]=[];
  allSchedules:Schedule[]=[];
  isCheckboxDisabled:boolean=false;
  schedule!:Schedule;
  isScheduleSelected:boolean=false;
  weekDays:string[]=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

  @Input('takenProfessorSchedule') takenProfessorSchedule:Schedule[]=[];
  @Input('takenEnvironmentSchedule') takenEnvironmentSchedule: Schedule[]=[]
  @Output() selectedSchedule = new EventEmitter<Schedule>();
  constructor(
    private scheduleService:ScheduleService
  ){

  }
  ngOnInit(){
    // this.weekDays =this.scheduleService.getAllWeekDays();
    this.availableSchedules=this.scheduleService.getAllAvailableScheduleByEnvironment();
    console.log("Valor de taken profesor y environment ", this.takenProfessorSchedule , "  ")
    console.log(this.takenEnvironmentSchedule)
    // obtener todos los horarios vacios
    // cruzar los horarios ocupados con los vacios y que queden solo los vacios
    // mostrar solo los horarios vacios o mostrar deshabilitado para escoger
  }
  changeSelectedSchedule(){
      //TODO borrar progreso si cambia de horario volver a mostrar los horarios disponibles
  }
  onSelectingSchedule(schedule:Schedule,e:Event){

    const x = e.target as HTMLInputElement
    if(x.checked){
      // Seleccionaron un horario
      this.schedule=schedule;
      this.selectedSchedule.emit(schedule)
      this.isScheduleSelected=true //ya hay un curso horario seleccionado
      this.isCheckboxDisabled=true //deshabilitar que peuda seleccionar otros cursos
      this.showSelectedSchedule=true
    }
  }


}
