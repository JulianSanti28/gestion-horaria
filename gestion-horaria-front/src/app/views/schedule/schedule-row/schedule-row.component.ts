import { Component, Input } from '@angular/core';
import { Schedule, ScheduleColor } from 'src/app/models/schedule.model';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';

@Component({
  selector: 'app-schedule-row',
  templateUrl: './schedule-row.component.html',
  styleUrls: ['./schedule-row.component.scss']
})
export class ScheduleRowComponent {


  numeroDia?: number;


  @Input('horariosColor')horariosColor!:ScheduleColor[];
  @Input("hora") hora:string="";
  @Input("header") header:string="";

  colores :{[key:number]:string;}={
    1:"bg-sky",
    2:"bg-orange",
    3:"bg-green",
    4:"bg-yellow",
    5:"bg-pink",
    6:"bg-purple",
    7:"bg-lightred"
  }
  constructor(
    private scheduleService:ScheduleService
  ){

  }

  ngOnInit(){
    //Los horarios ya vienen desde el padre y deben estar con el color

  }


  timeInRange(inicial:string, final:string,franja:string){
    //lo va a pintar si
    //inicial es igual a la franja o ( si el final es mayor a la franja y el inicial es menor a la franja)
    // console.log("Llegan a range ",inicial, " ",final, " ",franja)

    if(inicial==franja || ( parseInt(final)>parseInt(franja) && parseInt(inicial)<parseInt(franja)) ){
      // console.log("retorna true para pintar ")
      return true
    }
    // console.log("no pasan")
    return false
  }

  

}
