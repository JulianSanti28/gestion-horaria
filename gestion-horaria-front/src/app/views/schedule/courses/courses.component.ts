import { Component, OnInit,Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { timeStamp } from 'console';
import {Course} from 'src/app/models/course.model'
import { Program } from 'src/app/models/program.model';
import {CourseService} from 'src/app/services/course/course.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  columns:string[]=['Id curso','Grupo','Capacidad','Periodo','Materia','Profesor','Ver detalles','Seleccionar'];
  courses:Course[]=[];
  isCourseSelected:boolean=false;
  isCheckboxDisabled:boolean=false;
  @Input('selectedProgram')  program!:Program;
  @Input('selectedSemester')  semester!:number;
  @Output() selectedCourse = new EventEmitter<Course| null>()
  @ViewChildren("checkboxes") checkboxes!: QueryList<ElementRef>;
  constructor(
    private courseService: CourseService,
  ){

  }
  ngOnInit(): void {

    // Traer los cursos del programa y semestre seleccionados
    this.courses= this.courseService.getAllCoursesFromProgramAndSemester(this.program.id,this.semester)

  }
  onSelectingCourse(course:Course , e:Event){
    // console.log("el curso seleccionado en courses es ",course)
    const x = e.target as HTMLInputElement
    if(x.checked){
      // Seleccionaron el curso
      this.selectedCourse.emit(course)
      this.isCourseSelected=true //ya hay un curso seleccionado esto le da paso a escoger un ambiente
      this.isCheckboxDisabled=true //deshabilitar que peuda seleccionar otros cursos

    }

  }
  changeSelectedCourse(){

    this.isCheckboxDisabled=false
    this.isCourseSelected=false

    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
    this.selectedCourse.emit(null)
  }
}
