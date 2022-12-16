import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Location } from '@angular/common';

import { Ambiente } from 'src/app/models/ambiente.model';
import { Recurso } from 'src/app/models/recurso.model';

import { AmbienteService } from 'src/app/services/ambiente.service';
import { RecursoService } from 'src/app/services/recurso.service';


@Component({
  selector: 'app-ambiente-detail',
  templateUrl: './ambiente-detail.component.html',
  styleUrls: ['./ambiente-detail.component.scss']
})
export class AmbienteDetailComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private ambienteService:AmbienteService,
    private recursoService:RecursoService,
    private location:Location
  ) { }

  ambienteId:number | null = null;
  ambiente :Ambiente={
    'idAmbiente':0,
    'tipoAmbiente':{'idTipoAmbiente':'4','nombreTipoAmbiente':'prueba'},
    'nombre':'salon fun',
    'ubicacion':'Humanidades',
    'capacidad':30,
    'descripcion':'Es un salon'

  };

  recursos:Recurso[]=[];
  ngOnInit(): void {
    //obteniendo el id de la url debe llamarse igual que en el app-routing

    // this.route.paramMap.pipe(switchMap((params)=>{
    //   this.ambienteId= Number(params.get('idAmbiente'));
    //   if(this.ambienteId){
    //     return this.ambienteService.getByAmbienteId(this.ambienteId);
    //   }
    //   return [null];
    // })
    // ).subscribe((data)=>{
    //   this.ambiente=data;
    // })

    this.route.paramMap.subscribe(
      params=>{this.ambienteId= Number(params.get('idAmbiente'));
      if(this.ambienteId!= null ){
        this.ambiente=this.ambienteService.getByAmbienteId(this.ambienteId);
      }
      else{
        //this.ambiente=null;
      }

    }
    )
    //recursos correspondientes a un ambiente
    this.recursos= this.recursoService.getRecursosByAmbienteId(this.ambiente.idAmbiente);
  }

  goToBack(){
    this.location.back();
  }
}
