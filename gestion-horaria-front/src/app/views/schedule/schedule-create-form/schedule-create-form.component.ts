import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { Environment } from 'src/app/models/environment.model';
import { Program } from 'src/app/models/program.model';
import { Schedule, ScheduleDTO } from 'src/app/models/schedule.model';
import { EnvironmentService } from 'src/app/services/environment/environment.service';


import { ScheduleService } from 'src/app/services/schedule/schedule.service';
@Component({
  selector: 'app-schedule-create-form',
  templateUrl: './schedule-create-form.component.html',
  styleUrls: ['./schedule-create-form.component.scss']
})
export class ScheduleCreateFormComponent {

  form!: FormGroup;
  @Output()isFormValid = new EventEmitter<boolean>;
  @Output() progress = new EventEmitter<number>()
  @Output() selectedEnvironment = new EventEmitter<Environment>();
  @Output() scheduleCreated = new EventEmitter<ScheduleDTO>();
  @Input('selectedProgram')  program!:Program;
  @Input('selectedSemester')  semester!:number;
  @Input('isEdit')isEdit!:boolean;

  constructor(
    private formBuilder:FormBuilder,
    private scheduleService:ScheduleService,
    private environmentService : EnvironmentService

  ){

  }
  courseSelected: Course = {'courseId':1,'courseGroup':'A','courseCapacity':20,'periodId':'','subjectCode':'','teacherCode':''}
  environmentSelected: Environment  = this.environmentService.getEmptyEnvironment()
  scheduleSelected:Schedule   = this.scheduleService.getEmptySchedule()

  takenEnvironmentSchedules:Schedule[]=[];
  takenProfessorSchedules:Schedule[]=[];


  sumProgres:number=30;
  showEnvironments:boolean=false
  showSelectedEnvironment:boolean=false;
  showBtnCreate=false;

  ngOnInit(){

    this.buildForm();

    this.isFormValid.emit(false)
    if(this.scheduleService.getValueContinueCreatingForCourse()==true){
      this.clearForContinueCreating()
    }


  }


  private buildForm(){
    this.form = this.formBuilder.group({

    });
  }
  clearForContinueCreating(){
    this.environmentSelected=this.environmentService.getEmptyEnvironment()
    this.scheduleSelected= this.scheduleService.getEmptySchedule()
  }
  onSelectedProgram(event:Event){
    //traer el numero de semestres de ese programa
    this.progress.emit(this.sumProgres)
  }
  onSelectedSemester(event:Event){
    //actualizar la tabla de
    this.progress.emit(this.sumProgres)
  }

  getSelectedCourse(course:Course|null){
    if(course != null){
        //recibe el curso desde courses
      this.courseSelected=course
      //consumir servicio para obtener el horario ocupado del profesor
      this.fillTakenProfessorSchedule();
      this.progress.emit(this.sumProgres) //emitir progreso curso hasta componente create
      this.showEnvironments=true
    }else{
      this.progress.emit(-this.sumProgres)

      this.takenEnvironmentSchedules=[]
    }

  }

  getSelectedEnvironment(environment:Environment | null){
    if(environment != null){
      this.environmentSelected=environment
      this.showSelectedEnvironment=true
      this.progress.emit(this.sumProgres)
      this.selectedEnvironment.emit(this.environmentSelected)
      //TODO consumir servicio que trae el horario ocupado del amibiente
    }else{
      this.progress.emit(-this.sumProgres)
      //TODO limpiar horario ocupado del ambiente
    }

  }
  getSelectedSchedule(schedule:Schedule | null ){
    if(schedule != null){
      this.scheduleSelected=schedule;
      this.isFormValid.emit(true)
      this.progress.emit(this.sumProgres)
      this.showBtnCreate=true
    }else{
      this.progress.emit(-this.sumProgres)
      this.showBtnCreate=false

    }
  }
  getInfo(){
    let scheduleCreated :ScheduleDTO= {id:0, day:'',startingTime:'',endingTime:'',courseId:0,environmentId:0};
    scheduleCreated.day=this.scheduleSelected.day.toUpperCase()
    scheduleCreated.startingTime=this.scheduleSelected.startingTime
    scheduleCreated.endingTime=this.scheduleSelected.endingTime
    scheduleCreated.courseId=this.courseSelected.courseId
    scheduleCreated.environmentId=this.environmentSelected.id
    console.log("Emitiendo schedule ",scheduleCreated)
    this.scheduleCreated.emit(scheduleCreated)
  }
  fillTakenProfessorSchedule(){
    this.scheduleService.getTakenProfessorSchedule(this.courseSelected.courseId).subscribe((response) =>{

      this.takenProfessorSchedules = response.data.elements as Schedule[]


    });
  }
  fillTakenEnvironmentSchedule(){
    this.scheduleService.getTakenEnvironmentSchedule(this.environmentSelected.id).subscribe((response) =>{

      this.takenProfessorSchedules = response.data.elements as Schedule[]


    });
  }
}
