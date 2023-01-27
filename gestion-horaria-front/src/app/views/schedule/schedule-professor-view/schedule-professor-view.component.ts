import { NonNullAssert } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Professor } from 'src/app/models/professor.model';
import { ActivatedRoute } from '@angular/router';
import { Schedule } from 'src/app/models/schedule.model';
import {ScheduleProfessorService} from 'src/app/services/schedule-professor/schedule-professor.service'


@Component({
  selector: 'app-schedule-professor-view',
  templateUrl: './schedule-professor-view.component.html',
  styleUrls: ['./schedule-professor-view.component.scss']
})
export class ScheduleProfessorViewComponent {

  @Input()profesor!:Professor;
  showSelectedProfessor:boolean=false;
  isDisabled:boolean=false;
  @Output()selectedProfessor = new EventEmitter<Professor|null>();
  // le llega el profesor seleccionado del padre schedule-professor-detail
  @ViewChildren("checkboxes") checkboxes!: QueryList<ElementRef>;

  constructor(
    private professorService: ScheduleProfessorService
  ){}
  ngOnInit(): void{}

  changeSelectedEnvironment(){
    this.isDisabled=false
    // this.render2.setAttribute(this.casilla.nativeElement,'checked','false')
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
    this.selectedProfessor.emit(null)
  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

