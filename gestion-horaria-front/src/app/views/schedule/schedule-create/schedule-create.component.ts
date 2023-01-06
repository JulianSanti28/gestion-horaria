import { Component } from '@angular/core';
import { Program } from 'src/app/models/program.model';

@Component({
  selector: 'app-schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.scss']
})
export class ScheduleCreateComponent {

  progressMadeProgramSemester:number=0;
  progressMadeForm:number=0;
  program!:Program;

  getProgram(program:Program){
    console.log("programa es ",program)
    this.program=program;
  }
  getProgressMadeProgramSemester(progress:number){
    this.progressMadeProgramSemester += progress
    //this.progressMadeForm +=(progress/2)
  }
  getProgressMadeForm(progress:number){
    this.progressMadeForm += progress
  }
}
