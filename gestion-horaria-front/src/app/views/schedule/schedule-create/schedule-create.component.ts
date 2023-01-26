import { Component, ElementRef, ViewChild } from '@angular/core';
// import { NgxBootstrapService } from '@coreui/angular';
import { Course } from 'src/app/models/course.model';
import { Environment } from 'src/app/models/environment.model';
import { Program } from 'src/app/models/program.model';

@Component({
  selector: 'app-schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.scss']
})
export class ScheduleCreateComponent {
  items = [1, 2, 3, 4];
  progressMadeProgramSemester:number=0;
  progressMadeForm:number=0;
  sumProgress:number=10;
  showForm:boolean=true;
  createFormIsValid=false
  program:Program={
    'program_id':'0',
    'name':'',
    'department_id':''
  };
  @ViewChild('beforeFormAccordion',{static:true}) beforeFormAccordion !:ElementRef ;
  showSelectedProgramAndSemester:boolean=false;
  showScheduleView:boolean=false;
  semester:number=0;
  course:Course={'courseId':1,'courseGroup':'A','courseCapacity':20,'periodId':'','subjectCode':'','teacherCode':''}
  environmentSelected!: Environment;
  // constructor(private ngxService: NgxBootstrapService
  //   ) { }
  getSelectedProgram(program:Program){

    this.program=program;
  }
  getSelectedSemester(semestre:number){

    this.semester=semestre;
  }
  getSelectedCourse(course:Course){

    this.course=course

  }
  getProgressMadeProgramSemester(progress:number){
    this.progressMadeProgramSemester += progress
    if(this.progressMadeProgramSemester == 100){
      this.showSelectedProgramAndSemester =true;

    }else{
      this.showSelectedProgramAndSemester =false;
    }
    //this.progressMadeForm +=(progress/2)
  }
  getProgressMadeForm(progress:number){
    this.progressMadeForm += progress

    if(this.progressMadeForm >= 60){
      this.showScheduleView=true
    }else{
      this.showScheduleView=false
    }
  }
  changeShowForm(){
    console.log("entra")
    this.showForm=!this.showForm
  }
  getSelectedEnvironment(environment:Environment){
    this.environmentSelected = environment;
  }
  getCreateFormIsValid(result:boolean){
    this.createFormIsValid=result
  }
  getInfo(){

  }
  onSaveSchedule(){

  }
}
