import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Environment } from 'src/app/models/environment.model';
import { Period } from 'src/app/models/period.model';
import { Schedule, ScheduleDTO } from 'src/app/models/schedule.model';
import { Program } from 'src/app/models/program.model';
import { Teacher } from 'src/app/models/teacher.model';
import { Subject } from 'src/app/models/subject.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {


  period:Period={'periodId':'2022.2','state':'true'}
  program:Program={program_id:'PIS',name:'INGENIERIA DE SISTEMAS',department_id:'1'}
  subject:Subject={'subjectCode':'1','name':'Programacion orientada a objetos','weeklyOverload':6,'timeBlock':true,'semester':2,'program':this.program}
  teacher:Teacher={'teacherCode':'104618021314','fullName':'PPC','department':[]}
  curso:Course={'courseId':1,'courseGroup':'A','courseCapacity':20,'periodId':this.period.periodId,'subjectCode':this.subject.subjectCode,'teacherCode':this.teacher.teacherCode}
  course!: Course;
  envi!:Environment;
  schedule:Schedule[]=[
    {id:1,day:"lunes",startingTime:'07:00',endingTime:'09:00',course:this.curso,environment:this.envi},
    {id:2,day:"lunes",startingTime:'09:00',endingTime:'11:00',course:this.curso,environment:this.envi} ,
    {id:3,day:"lunes",startingTime:'11:00',endingTime:'13:00',course:this.curso,environment:this.envi} ,
    {id:4,day:"lunes",startingTime:'14:00',endingTime:'16:00',course:this.curso,environment:this.envi} ,
    {id:5,day:"lunes",startingTime:'16:00',endingTime:'18:00',course:this.curso,environment:this.envi} ,
    {id:6,day:"lunes",startingTime:'18:00',endingTime:'20:00',course:this.curso,environment:this.envi} ,
    {id:7,day:"lunes",startingTime:'20:00',endingTime:'22:00',course:this.curso,environment:this.envi} ,

    {id:8,day:"martes",startingTime:'07:00',endingTime:'09:00',course:this.curso,environment:this.envi},
    {id:9,day:"martes",startingTime:'09:00',endingTime:'11:00',course:this.curso,environment:this.envi} ,
    {id:10,day:"martes",startingTime:'11:00',endingTime:'13:00',course:this.curso,environment:this.envi} ,
    {id:11,day:"martes",startingTime:'14:00',endingTime:'16:00',course:this.curso,environment:this.envi} ,
    {id:12,day:"martes",startingTime:'16:00',endingTime:'18:00',course:this.curso,environment:this.envi} ,
    {id:13,day:"martes",startingTime:'18:00',endingTime:'20:00',course:this.curso,environment:this.envi} ,
    {id:14,day:"martes",startingTime:'20:00',endingTime:'22:00',course:this.curso,environment:this.envi} ,

    {id:15,day:"miercoles",startingTime:'07:00',endingTime:'09:00',course:this.curso,environment:this.envi},
    {id:16,day:"miercoles",startingTime:'09:00',endingTime:'11:00',course:this.curso,environment:this.envi} ,
    {id:17,day:"miercoles",startingTime:'11:00',endingTime:'13:00',course:this.curso,environment:this.envi} ,
    {id:18,day:"miercoles",startingTime:'14:00',endingTime:'16:00',course:this.curso,environment:this.envi} ,
    {id:19,day:"miercoles",startingTime:'16:00',endingTime:'18:00',course:this.curso,environment:this.envi} ,
    {id:20,day:"miercoles",startingTime:'18:00',endingTime:'20:00',course:this.curso,environment:this.envi} ,
    {id:21,day:"miercoles",startingTime:'20:00',endingTime:'22:00',course:this.curso,environment:this.envi} ,

    {id:22,day:"jueves",startingTime:'07:00',endingTime:'09:00',course:this.curso,environment:this.envi},
    {id:23,day:"jueves",startingTime:'09:00',endingTime:'11:00',course:this.curso,environment:this.envi} ,
    {id:24,day:"jueves",startingTime:'11:00',endingTime:'13:00',course:this.curso,environment:this.envi} ,
    {id:25,day:"jueves",startingTime:'14:00',endingTime:'16:00',course:this.curso,environment:this.envi} ,
    {id:26,day:"jueves",startingTime:'16:00',endingTime:'18:00',course:this.curso,environment:this.envi} ,
    {id:27,day:"jueves",startingTime:'18:00',endingTime:'20:00',course:this.curso,environment:this.envi} ,
    {id:28,day:"jueves",startingTime:'20:00',endingTime:'22:00',course:this.curso,environment:this.envi} ,

    {id:29,day:"viernes",startingTime:'07:00',endingTime:'09:00',course:this.curso,environment:this.envi},
    {id:30,day:"viernes",startingTime:'09:00',endingTime:'11:00',course:this.curso,environment:this.envi} ,
    {id:31,day:"viernes",startingTime:'11:00',endingTime:'13:00',course:this.curso,environment:this.envi} ,
    {id:32,day:"viernes",startingTime:'14:00',endingTime:'16:00',course:this.curso,environment:this.envi} ,
    {id:33,day:"viernes",startingTime:'16:00',endingTime:'18:00',course:this.curso,environment:this.envi} ,
    {id:34,day:"viernes",startingTime:'18:00',endingTime:'20:00',course:this.curso,environment:this.envi} ,
    {id:35,day:"viernes",startingTime:'20:00',endingTime:'22:00',course:this.curso,environment:this.envi} ,

    {id:36,day:"sabado",startingTime:'07:00',endingTime:'09:00',course:this.curso,environment:this.envi},
    {id:37,day:"sabado",startingTime:'09:00',endingTime:'11:00',course:this.curso,environment:this.envi} ,
    {id:38,day:"sabado",startingTime:'11:00',endingTime:'13:00',course:this.curso,environment:this.envi} ,
    {id:39,day:"sabado",startingTime:'14:00',endingTime:'16:00',course:this.curso,environment:this.envi} ,
    {id:40,day:"sabado",startingTime:'16:00',endingTime:'18:00',course:this.curso,environment:this.envi} ,
    {id:41,day:"sabado",startingTime:'18:00',endingTime:'20:00',course:this.curso,environment:this.envi} ,
    {id:42,day:"sabado",startingTime:'20:00',endingTime:'22:00',course:this.curso,environment:this.envi} ,


  ]
  continueCreatingScheduleForCourse:boolean =false;
  endPoint:String = 'api/schedule'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor(
    private http : HttpClient
  ) { }
  getAllAvailableScheduleByEnvironment(){
    // Consultar todos los horarios disponibles de este ambiente (donde course es null) p
    return this.schedule;
  }

  getAllScheduleFromEnvironment(){
    //consultar todos los horarios ya ocupados de un ambiente
    return this.schedule;
  }

  getTakenProfessorSchedule(teacherCode: string){
    //TODO consumir servicio para obtener el horario ocupado del profesor
    // http://localhost:8081/api/schedule/byTeacher?teacherCode=1

    return this.http.get<any>(this.endPoint+`/byTeacher?teacherCode=${teacherCode}`,this.httpOptions)
    .pipe(
      catchError((e) => {

        console.log('Error obteniendo  horario ocupado del profesor ', e.error.mensaje, 'error');
        return throwError(e);

      })
    )
  }
  getTakenEnvironmentSchedule(environmentId: number){
    //TODO consumir servicio para obtener el horario ocupado del profesor
    return this.http.get<any>(this.endPoint+`?environmentId=${environmentId}`,this.httpOptions)
    .pipe(
      catchError((e) => {

        console.log('Error obteniendo  horario ocupado del ambiente ', e.error.mensaje, 'error');
        return throwError(e);

      })
    )
  }

  saveSchedule(schedule:ScheduleDTO){
    return this.http.post<any>(this.endPoint+'',schedule,this.httpOptions)
    .pipe(
      catchError((e) => {

        console.log('Error obteniendo  horario ocupado del profesor ', e.error.mensaje, 'error');
        return throwError(e);

      })
    )
  }
  updateContinueCreatingForCourse(value:boolean){
    this.continueCreatingScheduleForCourse=value;
  }
  getValueContinueCreatingForCourse(){
    return this.continueCreatingScheduleForCourse;
  }

  getEmptySchedule(){
    return {
      id:0,
      day:'',
      startingTime:'',
      endingTime:'',
      course:{'courseId':1,'courseGroup':'A','courseCapacity':20,'periodId':'','subjectCode':'','teacherCode':''},
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
  }
}
