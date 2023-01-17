import { Component, Input } from '@angular/core';
import { Environment } from 'src/app/models/environment.model';
import { Schedule } from 'src/app/models/schedule.model';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.scss']
})
export class ScheduleViewComponent {

  numeroDia?: number;
  contador: number = 0;
  headers:string[]=["Hora","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
  horariosAmbiente!:Schedule[];
  @Input('ambiente') ambiente!:Environment;

  constructor(
    private scheduleService:ScheduleService
  ){

  }

  ngOnInit(){
    //llamar al servicio para traer los horarios disponibles de ese ambiente
    this.horariosAmbiente = this.scheduleService.getAllScheduleFromEnvironment();

  }
  iniciarContador(){
    this.contador = 0;
  }

  incrementarContador(){
    this.contador++;
  }

  validarNumeroDia(dia:string){

    if(dia == 'lunes'){
      this.numeroDia = 1;
    }
    if(dia == 'martes'){
      this.numeroDia = 2;
    }
    if(this.removeAccents(dia) == 'miercoles'){
      this.numeroDia = 3;
    }
    if(dia == 'jueves'){
      this.numeroDia = 4;
    }
    if(dia == 'viernes'){
      this.numeroDia = 5;
    }
    if(this.removeAccents(dia) == 'sabado'){

      this.numeroDia = 6;
    }
    console.log("numero de dia",this.numeroDia)
  }

  removeAccents = (str:String) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  timeInRange(inicial:string, final:string,franja:string){
    //si es el inicial es igual a la franja o si el final es mayor a la franja
    console.log("Llegan a range ",inicial, " ",final, " ",franja)
    console.log("a ver formato ",parseInt(inicial))
    if(inicial==franja || parseInt(final)>parseInt(franja)){
      return true
    }
    console.log("no pasan")
    return false
  }
  // periodos?: Periodo[];
  // public createForm!: FormGroup;
  // horarioDocente: HorarioDocente = new HorarioDocente();
  // horariosPeriodoDocente?: Horario[];
  // constructor(private router: Router, private periodoService: PeriodoService, private franjaService: FranjaService) { }

  // ngOnInit(): void {
  //   this.obtenerPeriodos();

  // }


  // async obtenerPeriodos() {
  //   this.periodoService.getPeriodos()
  //     .subscribe(data => {
  //       this.periodos = data;
  //     })
  // }
  // consultarHorario() {
  //   this.horarioDocente.periodo = this.periodo!.value;
  //   this.horarioDocente.id = localStorage.getItem('id')!;
  //   console.log(this.horarioDocente);
  //   this.franjaService.getHorarioDocente(this.horarioDocente)
  //     .subscribe(data => {
  //       this.horariosPeriodoDocente = data;
  //       console.log(this.horariosPeriodoDocente);

  //     }
  //     )
  // }

  // get periodo() { return this.createForm.get('periodo'); }


}
