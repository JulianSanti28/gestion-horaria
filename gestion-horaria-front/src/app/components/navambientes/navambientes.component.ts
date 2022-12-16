import { Component, OnInit , OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { TipoAmbiente } from 'src/app/models/tipoAmbiente.model';

import { TipoambientesService } from 'src/app/services/tipoambientes.service';
@Component({
  selector: 'app-navambientes',
  templateUrl: './navambientes.component.html',
  styleUrls: ['./navambientes.component.scss']
})
export class NavambientesComponent implements OnInit {

  tipoAmbientes: TipoAmbiente[]=[]
  constructor(
    private tipoAmbientesService:TipoambientesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tipoAmbientes=this.tipoAmbientesService.getAllTipoAmbientes();
  }
  onNavigate(location: Event){
    this.router.navigateByUrl((location.target as HTMLInputElement).value);
    //this.router.navigate(location.target);
  }
}
