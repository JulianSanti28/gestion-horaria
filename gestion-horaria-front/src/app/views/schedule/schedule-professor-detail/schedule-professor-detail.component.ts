import { Component } from '@angular/core';
import { Professor } from 'src/app/models/professor.model';

@Component({
  selector: 'app-schedule-professor-detail',
  templateUrl: './schedule-professor-detail.component.html',
  styleUrls: ['./schedule-professor-detail.component.scss']
})
export class ScheduleProfessorDetailComponent {

  showScheduleView:boolean = false // no mostrar el horario hasta que se haya seleccionado un profesor
  selectedProfessor:Professor={};
  // TODO all

  getSelectedProfessor(profesor:Professor){
    //obtener al profesor seleccionado que le llega como parametro
    this.selectedProfessor=profesor
  }
}
