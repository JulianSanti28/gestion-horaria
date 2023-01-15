import { Component, ElementRef, ViewChild } from '@angular/core';
// import { NgxBootstrapService } from '@coreui/angular';
import { Course } from 'src/app/models/course.model';
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
  program:Program={
    'id':'0',
    'name':''
  };
  @ViewChild('beforeFormAccordion',{static:true}) beforeFormAccordion !:ElementRef ;
  showSelectedProgramAndSemester:boolean=false;
  semester:number=0;
  course:Course={'courseId':0,'courseGroup':'','courseCapacity':0,'period':{'periodId':'','state':''},'subject':{'subjectCode':'','name':'','weeklyOverload':0,'timeBlock':true,'semester':0,'program':{'id':'','name':''}},'teacher':{'teacherCode':'','fullName':'','department':{}}}

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
  }
  changeShowForm(){
    console.log("entra")
    this.showForm=!this.showForm
  }

}
