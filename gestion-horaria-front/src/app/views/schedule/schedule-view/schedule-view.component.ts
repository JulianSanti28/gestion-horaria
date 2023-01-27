import { AfterViewInit, Component, Input } from '@angular/core';
import { Environment } from 'src/app/models/environment.model';
import { Schedule, ScheduleColor } from 'src/app/models/schedule.model';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.scss']
})
export class ScheduleViewComponent implements AfterViewInit {

  numeroDia?: number;
  contador: number = 0;
  headers:string[]=["hora","lunes","martes","miercoles","jueves","viernes","sabado"]
  weekDays=["lunes","martes","miercoles","jueves","viernes","sabado"]
  horariosAmbiente!:Schedule[];
  horariosAmbienteColor:ScheduleColor[]=[];
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
  iteradorColores:number=1
  @Input('ambiente') ambiente!:Environment;

  constructor(
    private scheduleService:ScheduleService
  ){

  }

  //llamar al servicio para traer los horarios disponibles de ese ambiente
    // this.horariosAmbiente = this.scheduleService.getAllScheduleFromEnvironment();
  ngOnInit(){
    console.log("Entra a ngOninit")
    this.scheduleService.getTakenEnvironmentSchedule(this.ambiente.id).subscribe((response) =>{
      console.log("Responseee ",response)
      this.horariosAmbiente = response as Schedule[]
      this.fillColorSchedule()

    });
    console.log("sale a ngOninit")
  }
  ngAfterViewInit(): void {
    console.log("Entra a after view ")
    // this.fillColorSchedule()
    console.log("sale a after view ")
  }
  async fillColorSchedule(){
    this.horariosAmbienteColor = this.horariosAmbiente.map((x)=>{ return {...x, color:""}})
    this.horariosAmbienteColor.forEach(x=> x.color= this.choseRandomColor())

    console.log("colores de horario ",this.horariosAmbienteColor)

  }
  choseRandomColor(){

    // let colorKeys:string[] = Object.keys(this.colores);
    // let randomIndex = Math.floor(Math.random() * colorKeys.length);
    // let randomColorKey:number = Number(colorKeys[randomIndex]);
    let randomColorValue:string = this.colores[this.iteradorColores];
    if(this.iteradorColores< 6){
      this.iteradorColores += 1
    }else{
      this.iteradorColores=1
    }


    return randomColorValue


  }



}
