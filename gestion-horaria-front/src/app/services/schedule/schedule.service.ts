import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Environment } from 'src/app/models/environment.model';
import { Period } from 'src/app/models/period.model';
import { Schedule, ScheduleColor, ScheduleDTO } from 'src/app/models/schedule.model';
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
    {id:1,day:"LUNES",startingTime:'07:00:00',endingTime:'09:00:00',course:this.curso,environment:this.envi},
    {id:2,day:"LUNES",startingTime:'09:00:00',endingTime:'11:00:00',course:this.curso,environment:this.envi} ,
    {id:3,day:"LUNES",startingTime:'11:00:00',endingTime:'13:00:00',course:this.curso,environment:this.envi} ,
    {id:4,day:"LUNES",startingTime:'14:00:00',endingTime:'16:00:00',course:this.curso,environment:this.envi} ,
    {id:5,day:"LUNES",startingTime:'16:00:00',endingTime:'18:00:00',course:this.curso,environment:this.envi} ,
    {id:6,day:"LUNES",startingTime:'18:00:00',endingTime:'20:00:00',course:this.curso,environment:this.envi} ,
    {id:7,day:"LUNES",startingTime:'20:00:00',endingTime:'22:00:00',course:this.curso,environment:this.envi} ,

    {id:8,day:"MARTES",startingTime:'07:00:00',endingTime:'09:00:00',course:this.curso,environment:this.envi},
    {id:9,day:"MARTES",startingTime:'09:00:00',endingTime:'11:00:00',course:this.curso,environment:this.envi} ,
    {id:10,day:"MARTES",startingTime:'11:00:00',endingTime:'13:00:00',course:this.curso,environment:this.envi} ,
    {id:11,day:"MARTES",startingTime:'14:00:00',endingTime:'16:00:00',course:this.curso,environment:this.envi} ,
    {id:12,day:"MARTES",startingTime:'16:00:00',endingTime:'18:00:00',course:this.curso,environment:this.envi} ,
    {id:13,day:"MARTES",startingTime:'18:00:00',endingTime:'20:00:00',course:this.curso,environment:this.envi} ,
    {id:14,day:"MARTES",startingTime:'20:00:00',endingTime:'22:00:00',course:this.curso,environment:this.envi} ,

    {id:15,day:"MIERCOLES",startingTime:'07:00:00',endingTime:'09:00:00',course:this.curso,environment:this.envi},
    {id:16,day:"MIERCOLES",startingTime:'09:00:00',endingTime:'11:00:00',course:this.curso,environment:this.envi} ,
    {id:17,day:"MIERCOLES",startingTime:'11:00:00',endingTime:'13:00:00',course:this.curso,environment:this.envi} ,
    {id:18,day:"MIERCOLES",startingTime:'14:00:00',endingTime:'16:00:00',course:this.curso,environment:this.envi} ,
    {id:19,day:"MIERCOLES",startingTime:'16:00:00',endingTime:'18:00:00',course:this.curso,environment:this.envi} ,
    {id:20,day:"MIERCOLES",startingTime:'18:00:00',endingTime:'20:00:00',course:this.curso,environment:this.envi} ,
    {id:21,day:"MIERCOLES",startingTime:'20:00:00',endingTime:'22:00:00',course:this.curso,environment:this.envi} ,

    {id:22,day:"JUEVES",startingTime:'07:00:00',endingTime:'09:00:00',course:this.curso,environment:this.envi},
    {id:23,day:"JUEVES",startingTime:'09:00:00',endingTime:'11:00:00',course:this.curso,environment:this.envi} ,
    {id:24,day:"JUEVES",startingTime:'11:00:00',endingTime:'13:00:00',course:this.curso,environment:this.envi} ,
    {id:25,day:"JUEVES",startingTime:'14:00:00',endingTime:'16:00:00',course:this.curso,environment:this.envi} ,
    {id:26,day:"JUEVES",startingTime:'16:00:00',endingTime:'18:00:00',course:this.curso,environment:this.envi} ,
    {id:27,day:"JUEVES",startingTime:'18:00:00',endingTime:'20:00:00',course:this.curso,environment:this.envi} ,
    {id:28,day:"JUEVES",startingTime:'20:00:00',endingTime:'22:00:00',course:this.curso,environment:this.envi} ,

    {id:29,day:"VIERNES",startingTime:'07:00:00',endingTime:'09:00:00',course:this.curso,environment:this.envi},
    {id:30,day:"VIERNES",startingTime:'09:00:00',endingTime:'11:00:00',course:this.curso,environment:this.envi} ,
    {id:31,day:"VIERNES",startingTime:'11:00:00',endingTime:'13:00:00',course:this.curso,environment:this.envi} ,
    {id:32,day:"VIERNES",startingTime:'14:00:00',endingTime:'16:00:00',course:this.curso,environment:this.envi} ,
    {id:33,day:"VIERNES",startingTime:'16:00:00',endingTime:'18:00:00',course:this.curso,environment:this.envi} ,
    {id:34,day:"VIERNES",startingTime:'18:00:00',endingTime:'20:00:00',course:this.curso,environment:this.envi} ,
    {id:35,day:"VIERNES",startingTime:'20:00:00',endingTime:'22:00:00',course:this.curso,environment:this.envi} ,

    {id:36,day:"SABADO",startingTime:'07:00:00',endingTime:'09:00:00',course:this.curso,environment:this.envi},
    {id:37,day:"SABADO",startingTime:'09:00:00',endingTime:'11:00:00',course:this.curso,environment:this.envi} ,
    {id:38,day:"SABADO",startingTime:'11:00:00',endingTime:'13:00:00',course:this.curso,environment:this.envi} ,
    {id:39,day:"SABADO",startingTime:'14:00:00',endingTime:'16:00:00',course:this.curso,environment:this.envi} ,
    {id:40,day:"SABADO",startingTime:'16:00:00',endingTime:'18:00:00',course:this.curso,environment:this.envi} ,
    {id:41,day:"SABADO",startingTime:'18:00:00',endingTime:'20:00:00',course:this.curso,environment:this.envi} ,
    {id:42,day:"SABADO",startingTime:'20:00:00',endingTime:'22:00:00',course:this.curso,environment:this.envi} ,


  ]
  colores :{[key:number]:string;}={
    1:"bg-sky",
    2:"bg-orange",
    3:"bg-green",
    4:"bg-yellow",
    5:"bg-pink",
    6:"bg-purple",
    // 7:"bg-lightred"
  }
  iteradorColores:number=1
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

  getScheduleWithColor(schedules:Schedule[]):ScheduleColor[]{
     return this.fillColorSchedule(schedules);
  }
  fillColorSchedule(horariosAmbiente :Schedule[]){
    let horariosColor = horariosAmbiente.map((x)=>{ return {...x, color:""}})
    horariosColor.forEach(x=> x.color= this.choseRandomColor())

    console.log("colores de horario ",horariosColor)
    return horariosColor
  }
  choseRandomColor(){

    // let colorKeys:string[] = Object.keys(this.colores);
    // let randomIndex = Math.floor(Math.random() * colorKeys.length);
    // let randomColorKey:number = Number(colorKeys[randomIndex]);
    let randomColorValue:string = this.colores[this.iteradorColores];
    if(this.iteradorColores< 6){
      this.iteradorColores += 1
    }else{
      this.iteradorColores=1
    }


    return randomColorValue


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
