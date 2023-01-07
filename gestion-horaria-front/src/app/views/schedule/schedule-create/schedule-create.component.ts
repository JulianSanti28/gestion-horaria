import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Program } from 'src/app/models/program.model';

@Component({
  selector: 'app-schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.scss']
})
export class ScheduleCreateComponent {

  progressMadeProgramSemester:number=0;
  progressMadeForm:number=0;
  sumProgress:number=10;
  program:Program={
    'id':'0',
    'name':''
  };
  semester:number=0;
  course!:Course;

  getSelectedProgram(program:Program){

    this.program=program;
  }
  getSelectedSemester(semestre:number){

    this.semester=semestre;
  }
  getSelectedCourse(course:Course){
    console.log("curso que llega al create component",course)
    this.course=course
    this.getProgressMadeForm(this.sumProgress)
  }
  getProgressMadeProgramSemester(progress:number){
    this.progressMadeProgramSemester += progress
    //this.progressMadeForm +=(progress/2)
  }
  getProgressMadeForm(progress:number){
    this.progressMadeForm += progress
  }

}
