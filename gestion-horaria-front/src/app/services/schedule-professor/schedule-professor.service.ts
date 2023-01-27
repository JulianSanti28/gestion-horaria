import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Professor } from 'src/app/models/professor.model';
import { Schedule } from 'src/app/models/schedule.model';
import { Course } from 'src/app/models/course.model';
import { Period } from 'src/app/models/period.model';
import { Teacher } from 'src/app/models/teacher.model';
import { Program } from 'typescript/lib/tsserverlibrary';
import { Subject } from 'src/app/models/subject.model';
import { Environment } from 'src/app/models/environment.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleProfessorService {

  period:Period={'periodId':'2022.2','state':'true'}
  program:Program={'program_id':'PIS','name':'Ingenieria de sistemas','department_id':''}
  subject:Subject={'subjectCode':'1','name':'Programacion orientada a objetos','weeklyOverload':6,'timeBlock':true,'semester':2,'program':this.program}
  teacher:Teacher={'teacherCode':'104618021314','fullName':'PPC','department':{}}
  curso:Course={'courseId':1,'courseGroup':'A','courseCapacity':20,'period':this.period,'subject':this.subject,'teacher':this.teacher}
  course!: Course;
  envi!:Environment;
  schedule:Schedule[]=[
    {id:1,day:"martes",startingTime:'07:00',endingTime:'9:00',course:this.curso,environment:this.envi} 
  ]

  constructor(
    private http : HttpClient
  ) { }

  getAvailableScheduleByProfessor(){
    return this.schedule;
  }

  // TODO servicios consultar profesores , obtener horario de ese profesor
}
