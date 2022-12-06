import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AmbienteService } from 'src/app/services/ambiente.service';

import { Ambiente } from 'src/app/models/ambiente.model';
@Component({
  selector: 'app-ambientes',
  templateUrl: './ambientes.component.html',
  styleUrls: ['./ambientes.component.scss']
})
export class AmbientesComponent implements OnInit {

  ambienteId: string |null=null;
  tipoAmbienteId: string |null=null;
  ambientes:Ambiente[]=[
    {id:1, nombre:'salon fundador',ubicacion:'Humanidades',capacidad:30,descripcion:'salon',tipoAmbiente:{idTipoAmbiente:1,nombreTipoAmbiente:'salon'}},
    {id:2, nombre:'salon entral',ubicacion:'Humanidades',capacidad:25,descripcion:'salon',tipoAmbiente:{idTipoAmbiente:1,nombreTipoAmbiente:'salon audiovisual'}},
    {id:3, nombre:'laboratorio',ubicacion:'Humanidades',capacidad:20,descripcion:'laboratorio',tipoAmbiente:{idTipoAmbiente:2,nombreTipoAmbiente:'laboratorio'}}

  ];
  characters: string[]=['a','e','i','o','u'];
  //columns: string[];

  columns:string[]=['Id','Tipo','Nombre','Ubicacion','Capacidad'];

  // id:number;
  // nombre:string;
  // ubicacion:string;
  // capacidad:number;
  // descripcion:string;
  // tipoAmbiente:TipoAmbiente;
  constructor(
    private route : ActivatedRoute,
    private ambienteService : AmbienteService
  ) { }

  //ambientes ligados a un tipo de ambiente
  ngOnInit(): void {
    //obteniendo el id de la url debe llamarse igual que en el app-routing
    this.route.paramMap.subscribe(
      params=> {this.tipoAmbienteId=params.get('idTipoAmbiente');
      if(this.tipoAmbienteId!= null ){
        //this.ambientes=this.ambienteService.getByTipoAmbiente(this.tipoAmbienteId)

      }

    }
    )
  }

}
