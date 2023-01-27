import { NonNullAssert } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Professor } from 'src/app/models/professor.model';
import { ActivatedRoute } from '@angular/router';
import { Schedule, ScheduleColor } from 'src/app/models/schedule.model';
import {ScheduleProfessorService} from 'src/app/services/schedule-professor/schedule-professor.service'


@Component({
  selector: 'app-schedule-professor-view',
  templateUrl: './schedule-professor-view.component.html',
  styleUrls: ['./schedule-professor-view.component.scss']
})
export class ScheduleProfessorViewComponent {


  numeroDia?: number;
  contador: number = 0;
  headers:string[]=["hora","lunes","martes","miercoles","jueves","viernes","sabado"]
  weekDays=["lunes","martes","miercoles","jueves","viernes","sabado"]
  horariosAmbiente!:Schedule[];
  horariosAmbienteColor!:ScheduleColor[];
  horasDia=["07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"]
  colores :{[key:number]:string;}={
    1:"bg-sky",
    2:"bg-orange",
    3:"bg-green",
    4:"bg-yellow",
    5:"bg-pink",
    6:"bg-purple",
    // 7:"bg-lightred"
  }
  iteradorColores:number=1;
  isDisabled:boolean = false;
  @ViewChildren("checkboxes") checkboxes!: QueryList<ElementRef>;
  @Output()selectdProfessor = new EventEmitter<Professor|null>();

  
  @Input()profesor!:Professor;
  constructor(
    private professorService: ScheduleProfessorService
  ){}
  ngOnInit(): void{}

  changeSelectedProfessor(){
    this.isDisabled=false
    // this.render2.setAttribute(this.casilla.nativeElement,'checked','false')
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
    this.selectdProfessor.emit(null)
  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

