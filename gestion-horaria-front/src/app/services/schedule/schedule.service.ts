import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Environment } from 'src/app/models/environment.model';
import { Schedule } from 'src/app/models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

  course!: Course;
  envi!:Environment;
  schedule:Schedule[]=[
    {id:1,day:"Lunes",startingTime:'7:00',endingTime:'9:00',course:this.course,environment:this.envi}
  ]
  getAllAvailableScheduleByEnvironment(){
    // Consultar todos los horarios disponibles de este ambiente (donde course es null) p
    return this.schedule;
  }
}
