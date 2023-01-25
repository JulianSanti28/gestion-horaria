import { Component, Input } from '@angular/core';
import { Professor } from 'src/app/models/professor.model';

@Component({
  selector: 'app-schedule-professor-view',
  templateUrl: './schedule-professor-view.component.html',
  styleUrls: ['./schedule-professor-view.component.scss']
})
export class ScheduleProfessorViewComponent {

  @Input()professor:Professor={} // le llega el profesor seleccionado del padre schedule-professor-detail
}
