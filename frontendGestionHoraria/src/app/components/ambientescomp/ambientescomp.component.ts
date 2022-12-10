import { Component, OnInit ,Input} from '@angular/core';

import { AmbienteService } from 'src/app/services/ambiente.service';
import { Ambiente } from 'src/app/models/ambiente.model';
@Component({
  selector: 'app-ambientescomp',
  templateUrl: './ambientescomp.component.html',
  styleUrls: ['./ambientescomp.component.scss']
})
export class AmbientescompComponent implements OnInit {

  //este componente debe tener comunicacion con el servicio para obtener todos los ambientes
  @Input()ambientes:Ambiente[]=[];

  characters: string[]=['a','e','i','o','u'];
  columns:string[]=['Id','Tipo','Nombre','Ubicacion','Capacidad'];

  constructor(
    private ambienteService : AmbienteService
  ) { }
  ngOnInit(): void {
  }

}
