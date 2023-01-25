import { Component, EventEmitter, Output } from '@angular/core';
import{Professor} from 'src/app/models/professor.model'

@Component({
  selector: 'app-professor-all',
  templateUrl: './professor-all.component.html',
  styleUrls: ['./professor-all.component.scss']
})
export class ProfessorAllComponent {

  //emitir el profesor al padre cuando haya checkeado en una casilla
  @Output()selectedProfessor= new EventEmitter<Professor>();

}
