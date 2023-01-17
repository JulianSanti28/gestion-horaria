import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Period } from 'src/app/models/period.model';
import { Program } from 'src/app/models/program.model';
import { Subject } from 'src/app/models/subject.model';
import { Teacher } from 'src/app/models/teacher.model';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  period:Period={'periodId':'2022.2','state':'true'}
  program:Program={'id':'PIS','name':'Ingenieria de sistemas'}
  subject:Subject={'subjectCode':'1','name':'Programacion orientada a objetos','weeklyOverload':6,'timeBlock':true,'semester':2,'program':this.program}
  teacher:Teacher={'teacherCode':'104618021314','fullName':'PPC','department':{}}
  courses:Course[]=[
    {'courseId':1,'courseGroup':'A','courseCapacity':20,'period':this.period,'subject':this.subject,'teacher':this.teacher}
  ]
  constructor() { }
  getAllCoursesFromProgramAndSemester(programId:string,semester:number){

    //consumir servicio que develva todos los cursos del semestre y programa seleccionados
    return this.courses
  }
}
