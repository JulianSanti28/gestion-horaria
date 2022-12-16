import { Component, OnInit,Input } from '@angular/core';
import { Recurso } from 'src/app/models/recurso.model';

@Component({
  selector: 'app-recursos-ambiente',
  templateUrl: './recursos-ambiente.component.html',
  styleUrls: ['./recursos-ambiente.component.scss']
})
export class RecursosAmbienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()recursos:Recurso[]=[];
  columns:string[]=['Id','Tipo','Nombre'];
}
