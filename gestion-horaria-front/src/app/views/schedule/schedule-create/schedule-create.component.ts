import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
// import { NgxBootstrapService } from '@coreui/angular';
import { Course } from 'src/app/models/course.model';
import { Environment } from 'src/app/models/environment.model';
import { Program } from 'src/app/models/program.model';
import { Schedule, ScheduleDTO } from 'src/app/models/schedule.model';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { ignoreElements } from 'rxjs';
import { Router } from '@angular/router';

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
  scheduleToCreate!:Schedule;
  continueCreatingSchedule:boolean = false
  constructor(
    private scheduleService: ScheduleService,
    private router: Router,
    ) { }
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
  changeContinueCreating(value:boolean){
    this.scheduleService.updateContinueCreatingForCourse(value)
  }
  onSaveSchedule(scheduleToCreate:ScheduleDTO){
    console.log("entra a save envi")
    let scheduleresponse:Schedule;
    //llamar a recurso de save environment
    this.scheduleService.saveSchedule(scheduleToCreate).subscribe(
      response => {


        if(response != null){
          scheduleresponse = response

          Swal.fire('Franja creada',
          `La franja : ${scheduleresponse.startingTime} ${scheduleresponse.endingTime}\n Curso: ${scheduleresponse.course.courseId}  \nfue creado exitosamente`, 'success');
          this.router.navigate(['//schedule/detail']);
          //this.isSent=true //enviar señal al formulario hijo de que puede limpiarse
          // Swal.fire({
          //   title: ' Franja creada ',
          //   text: `¿Seguir creando franjas para este curso   ${this.course.courseId} | ${this.course.courseGroup} ?` ,
          //   footer: `<h5> La franja : ${scheduleresponse.startingTime} ${scheduleresponse.endingTime}\n Curso: ${scheduleresponse.course.courseId}  \nfue creado exitosamente </h5> `,
          //   icon: 'success',
          //   showCancelButton: true,
          //   confirmButtonColor: '#3085d6',
          //   cancelButtonColor: '#d33',
          //   confirmButtonText: 'Si, continuar!'
          // }).then((result) => {
          //   if (result.isConfirmed) {
          //     this.changeContinueCreating(true)
          //     Swal.fire(
          //       'Ok',
          //       `Continuar creando le quedan : ${this.course.subjectCode} horas `,
          //       'success'
          //     )
          //   }
          //   if(result.isDenied || result.isDismissed){
          //     this.changeContinueCreating(false)
          //   }

          // })
        }

      }
    );
  }
}
