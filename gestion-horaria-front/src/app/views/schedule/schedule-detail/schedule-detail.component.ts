import { Component } from '@angular/core';
import { Environment } from 'src/app/models/environment.model';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})
export class ScheduleDetailComponent {

  showScheduleView:boolean=false;
  ambiente!:Environment;
  

  getSelectedEnvironment(envi :Environment | null){
    if(envi != null){
      this.ambiente=envi;
      this.showScheduleView=true;
      console.log("el ambiente seleccionado ",this.ambiente)
    }

  }
}
