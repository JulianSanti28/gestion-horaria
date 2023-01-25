import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { Environment } from 'src/app/models/environment.model';
import { Program } from 'src/app/models/program.model';
import { Schedule } from 'src/app/models/schedule.model';


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
  @Input('selectedProgram')  program!:Program;
  @Input('selectedSemester')  semester!:number;
  @Input('isEdit')isEdit!:boolean;

  courseSelected: Course = { 'courseId': 0, 'courseGroup': '', 'courseCapacity': 0, 'period': { 'periodId': '', 'state': '' }, 'subject': { 'subjectCode': '', 'name': '', 'weeklyOverload': 0, 'timeBlock': true, 'semester': 0, 'program': { 'id': '', 'name': '' } }, 'teacher': { 'teacherCode': '', 'fullName': '', 'department': {} } }
  environmentSelected: Environment = {
    id: 0,
    name: '',
    location: '',
    capacity: 0,
    environmentType: '',
    facultyId: '',
    availableResources: []
  }
  scheduleSelected:Schedule  ={
    id:0,
    day:'',
    startingTime:'',
    endingTime:'',
    course:{'courseId': 0, 'courseGroup': '', 'courseCapacity': 0, 'period': { 'periodId': '', 'state': '' }, 'subject': { 'subjectCode': '', 'name': '', 'weeklyOverload': 0, 'timeBlock': true, 'semester': 0, 'program': { 'id': '', 'name': '' } }, 'teacher': { 'teacherCode': '', 'fullName': '', 'department': {} } },
    environment: {
      id: 0,
      name: '',
      location: '',
      capacity: 0,
      environmentType: '',
      facultyId: '',
      availableResources: []
    }

  }

  takenEnvironmentSchedules:Schedule[]=[];
  takenProfessorSchedules:Schedule[]=[];

  sumProgres:number=30;
  showEnvironments:boolean=false
  showSelectedEnvironment:boolean=false;

  constructor(
    private formBuilder:FormBuilder,
    private scheduleService:ScheduleService,

  ){

  }
  ngOnInit(){

    this.buildForm();

    this.isFormValid.emit(false)
    console.log("programa y semestre que llegan al create form ", this.program, this.semester)
  }

  private buildForm(){
    this.form = this.formBuilder.group({

    });
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
    }else{
      this.progress.emit(-this.sumProgres)
    }
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
