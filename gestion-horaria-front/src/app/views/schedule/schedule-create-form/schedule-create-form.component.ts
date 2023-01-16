import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { Environment } from 'src/app/models/environment.model';
import { Program } from 'src/app/models/program.model';
import { Schedule } from 'src/app/models/schedule.model';

import {ProgramService} from 'src/app/services/program/program.service';
@Component({
  selector: 'app-schedule-create-form',
  templateUrl: './schedule-create-form.component.html',
  styleUrls: ['./schedule-create-form.component.scss']
})
export class ScheduleCreateFormComponent {

  form!: FormGroup;
  @Output() progress = new EventEmitter<number>()
  @Input('selectedProgram')  program!:Program;
  @Input('selectedSemester')  semester!:number;
  @Input('isEdit')isEdit!:boolean;

  courseSelected: Course | null = { 'courseId': 0, 'courseGroup': '', 'courseCapacity': 0, 'period': { 'periodId': '', 'state': '' }, 'subject': { 'subjectCode': '', 'name': '', 'weeklyOverload': 0, 'timeBlock': true, 'semester': 0, 'program': { 'id': '', 'name': '' } }, 'teacher': { 'teacherCode': '', 'fullName': '', 'department': {} } }
  environmentSelected: Environment |null = {
    id: 0,
    name: '',
    location: '',
    capacity: 0,
    environmentType: '',
    faculty: {facultyId:0,facultyName:'',departments:[],environments:[]},
    availableResources: []
  }
  scheduleSelected:Schedule | null ={
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
      faculty: {facultyId:0,facultyName:'',departments:[],environments:[]},
      availableResources: []
    }
    
  } 
  programs:Program[]=[];
  semesters:number[]=[];

  sumProgres:number=30;
  showEnvironments:boolean=false
  showSelectedEnvironment:boolean=false;

  constructor(
    private formBuilder:FormBuilder,
    private programService:ProgramService,

  ){

  }
  ngOnInit(){

    this.buildForm();
    this.programs=this.programService.getAllPrograms();
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
      //emitir progreso curso hasta componente create
      this.progress.emit(this.sumProgres)
      this.showEnvironments=true
    }else{
      this.progress.emit(-this.sumProgres)
    }

  }

  getSelectedEnvironment(environment:Environment | null){
    if(environment != null){
      this.environmentSelected=environment
      this.showSelectedEnvironment=true
      this.progress.emit(this.sumProgres)
    }else{
      this.progress.emit(-this.sumProgres)
    }

  }
  getSelectedSchedule(schedule:Schedule | null ){
    if(schedule != null){
      this.scheduleSelected=schedule;
      this.progress.emit(this.sumProgres)
    }else{
      this.progress.emit(-this.sumProgres)
    }
  }
}
