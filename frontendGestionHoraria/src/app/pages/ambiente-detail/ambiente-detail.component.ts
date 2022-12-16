import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ambiente } from 'src/app/models/ambiente.model';
import { switchMap } from 'rxjs';

import { Location } from '@angular/common';
import { AmbienteService } from 'src/app/services/ambiente.service';

@Component({
  selector: 'app-ambiente-detail',
  templateUrl: './ambiente-detail.component.html',
  styleUrls: ['./ambiente-detail.component.scss']
})
export class AmbienteDetailComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private ambienteService:AmbienteService,
    private location:Location
  ) { }

  ambienteId:number | null = null;
  ambiente :Ambiente |null=null;

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
        this.ambiente=null;
      }

    }
    )
  }

  goToBack(){
    this.location.back();
  }
}
