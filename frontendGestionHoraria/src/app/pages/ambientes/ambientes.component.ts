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
  ambientes:Ambiente[]=[];

  constructor(
    private route : ActivatedRoute,
    private ambienteService : AmbienteService
  ) { }

  //ambientes ligados a un tipo de ambiente
  ngOnInit(): void {

    this.ambientes=this.ambienteService.getAll();
    // .subscribe((data)=>{
    //   this.ambientes = data;
    // });


    //obteniendo el id de la url debe llamarse igual que en el app-routing
    this.route.paramMap.subscribe(
      params=> {this.tipoAmbienteId=params.get('idTipoAmbiente');
      if(this.tipoAmbienteId!= null ){
        this.ambientes=this.ambienteService.getByTipoAmbienteId(this.tipoAmbienteId);
      }
      else{
        this.ambientes=this.ambienteService.getAll();
      }

    }
    )
  }

}
