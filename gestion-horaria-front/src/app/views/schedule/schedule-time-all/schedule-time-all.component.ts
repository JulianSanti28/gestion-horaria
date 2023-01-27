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


  environmentType!: string ;
  isTypeSelected:boolean=false
  totalItems:number=0;
  totalNumberPage:number=1;
  paginadorEnvironment: any;
  pageSize:number=0;
  filteredSchedules:Schedule[]=[]
  @Input('takenProfessorSchedule') takenProfessorSchedules:Schedule[]=[];
  @Input('takenEnvironmentSchedule') takenEnvironmentSchedules: Schedule[]=[]
  @Output() selectedSchedule = new EventEmitter<Schedule>();




  constructor(
    private scheduleService:ScheduleService
  ){

  }
  ngOnInit(){
    // this.weekDays =this.scheduleService.getAllWeekDays();
    this.availableSchedules=this.scheduleService.getAllAvailableScheduleByEnvironment();
    console.log("Valor de taken profesor y environment ", this.takenProfessorSchedules , "  ")
    console.log(this.takenEnvironmentSchedules)

    // obtener todos los horarios vacios
    this.filteredSchedules=this.filterSchedules()
    console.log("Filtrados ",this.filteredSchedules)
    // cruzar los horarios ocupados con los vacios y que queden solo los vacios
    // mostrar solo los horarios vacios o mostrar deshabilitado para escoger
  }
  changeSelectedSchedule(){
      //TODO borrar progreso si cambia de horario volver a mostrar los horarios disponibles
  }

  filterSchedules():Schedule[]{
   const filteredSchedules = this.availableSchedules.filter(schedule => {
      // check if the schedule overlaps with any schedules in the takenProfessorSchedules array
      const professorOverlap = this.takenProfessorSchedules.some(pSchedule => {
        return schedule.day === pSchedule.day &&
          (schedule.startingTime >= pSchedule.startingTime && schedule.startingTime < pSchedule.endingTime ||
           schedule.endingTime > pSchedule.startingTime && schedule.endingTime <= pSchedule.endingTime);
      });

      // check if the schedule overlaps with any schedules in the takenEnvironmentSchedules array
      const environmentOverlap = this.takenEnvironmentSchedules.some(eSchedule => {
        return schedule.day === eSchedule.day &&
          (schedule.startingTime >= eSchedule.startingTime && schedule.startingTime < eSchedule.endingTime ||
           schedule.endingTime > eSchedule.startingTime && schedule.endingTime <= eSchedule.endingTime);
      });

      // only return the schedule if it doesn't overlap with either the professor or environment schedules
      return !professorOverlap && !environmentOverlap;
    });
    return filteredSchedules
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

  loadTableTime(args: number[]){
    let pageSolicitud:number = args[0];
    let pageSize: number = args[1]
      if(!pageSolicitud){
        pageSolicitud = 0;
      }
      if(!pageSize){
        pageSize=10
      }
      const startIndex = (pageSolicitud - 1) * this.pageSize;
      return this.filteredSchedules.slice(startIndex, startIndex + this.pageSize);
  }

}
