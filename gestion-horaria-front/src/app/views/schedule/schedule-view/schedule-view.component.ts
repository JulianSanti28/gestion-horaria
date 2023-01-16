import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.scss']
})
export class ScheduleViewComponent {

  numeroDia?: number;
  contador: number = 0;
  headers:string[]=["Hora","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
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

  }

  removeAccents = (str:String) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
