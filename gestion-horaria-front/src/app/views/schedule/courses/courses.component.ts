import { Component, OnInit } from '@angular/core';
import {Course} from 'src/app/models/course.model'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  columns:string[]=['Id curso','Grupo','Capacidad','Periodo','Materia','Profesor','Ver detalles','Seleccionar'];
  courses:Course[]=[];

  constructor(

  ){

  }
  ngOnInit(): void {

    // Traer los cursos del programa y semestre seleccionados
    
  }
  onSelectingCourse(course:Course){

  }
}
