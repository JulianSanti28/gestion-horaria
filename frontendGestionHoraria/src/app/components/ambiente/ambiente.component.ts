import { Component, OnInit,Input } from '@angular/core';
import { Ambiente } from 'src/app/models/ambiente.model';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.component.html',
  styleUrls: ['./ambiente.component.scss']
})
export class AmbienteComponent implements OnInit {

  private apiUrl='';
  constructor() { }

  ngOnInit(): void {
  }

  @Input('ambiente') ambiente!: Ambiente;
  columns:string[]=['Id','Tipo','Nombre','Ubicacion','Capacidad'];

  @Input() id:number | undefined;
  @Input() tipoAmbiente:string | undefined;
}

// id:number;
//   nombre:string;
//   ubicacion:string;
//   capacidad:number;
//   descripcion:string;
//   tipoAmbiente:TipoAmbiente;
