import { Component, Output,EventEmitter } from '@angular/core';
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
  isCheckboxDisabled:boolean=false;
  schedule!:Schedule;
  isScheduleSelected:boolean=false;
  weekDays:string[]=["Lunes","Martes","Miercoles","Jueves","Viernes"]
  @Output() selectedSchedule = new EventEmitter<Schedule>();
  constructor(
    private scheduleService:ScheduleService
  ){

  }
  ngOnInit(){
    // this.weekDays =this.scheduleService.getAllWeekDays();
    this.availableSchedules=this.scheduleService.getAllAvailableScheduleByEnvironment();

  }
  changeSelectedSchedule(){

  }
  onSelectingSchedule(schedule:Schedule,e:Event){

    const x = e.target as HTMLInputElement
    if(x.checked){
      // Seleccionaron un horario
      this.schedule=schedule;
      this.selectedSchedule.emit(schedule)
      this.isScheduleSelected=true //ya hay un curso horario seleccionado 
      this.isCheckboxDisabled=true //deshabilitar que peuda seleccionar otros cursos

    }
  }

}
