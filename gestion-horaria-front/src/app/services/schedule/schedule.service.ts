import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Environment } from 'src/app/models/environment.model';
import { Period } from 'src/app/models/period.model';
import { Schedule } from 'src/app/models/schedule.model';
import { Program } from 'src/app/models/program.model';
import { Teacher } from 'src/app/models/teacher.model';
import { Subject } from 'src/app/models/subject.model';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {


  period:Period={'periodId':'2022.2','state':'true'}
  program:Program={'id':'PIS','name':'Ingenieria de sistemas'}
  subject:Subject={'subjectCode':'1','name':'Programacion orientada a objetos','weeklyOverload':6,'timeBlock':true,'semester':2,'program':this.program}
  teacher:Teacher={'teacherCode':'104618021314','fullName':'PPC','department':{}}
  curso:Course={'courseId':1,'courseGroup':'A','courseCapacity':20,'period':this.period,'subject':this.subject,'teacher':this.teacher}
  course!: Course;
  envi!:Environment;
  schedule:Schedule[]=[
    {id:1,day:"martes",startingTime:'07:00',endingTime:'9:00',course:this.curso,environment:this.envi} ,
    {id:2,day:"lunes",startingTime:'07:00',endingTime:'9:00',course:this.curso,environment:this.envi} ,

  ]
  constructor() { }
  getAllAvailableScheduleByEnvironment(){
    // Consultar todos los horarios disponibles de este ambiente (donde course es null) p
    return this.schedule;
  }

  getAllScheduleFromEnvironment(){
    //consultar todos los horarios ya ocupados de un ambiente
    return this.schedule;
  }

  saveSchedule(){
    //guardar el schedule
  }
}
