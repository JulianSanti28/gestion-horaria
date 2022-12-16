import { Component, Input, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Ambiente } from 'src/app/models/ambiente.model';


import { AmbienteService } from 'src/app/services/ambiente.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form!: FormGroup;
  id!: string;

  @Input('ambiente')ambiente!:Ambiente;

  constructor(
    private formBuilder:FormBuilder,
    private ambienteService:AmbienteService,
    private router: Router
  ) {
    this.buildForm();
   }
//   <p>{{ambiente?.id}} </p>
// <p>{{ambiente?.tipoAmbiente?.nombreTipoAmbiente}} </p>
// <p>{{ambiente?.nombre}} </p>
// <p>{{ambiente?.ubicacion}}</p>
// <p>{{ambiente?.capacidad}} </p>
  ngOnInit(): void {
    const ambienteFill = {
      'id':this.ambiente.idAmbiente,
      'tipoAmbiente':this.ambiente.tipoAmbiente.nombreTipoAmbiente,
      'nombre':this.ambiente.nombre,
      'ubicacion':this.ambiente.ubicacion,
      'capacidad':this.ambiente.capacidad
    }
    this.form.patchValue(ambienteFill);
  }

  save($event:Event){
    if (this.form.valid){
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  saveAmbiente(event:Event){
    if (this.form.valid) {
      const ambiente = this.form.value;
      const newAmbiente = this.ambienteService.updateAmbiente(this.id, ambiente);
      console.log(newAmbiente);
      this.router.navigate(['./ambientes']);
      // .subscribe((newAmbiente) => {
      //   console.log(newAmbiente);
      //   this.router.navigate(['./ambientes']);
      // });
    }

  }



  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      ubicacion: ['',[Validators.required]],
      capacidad: ['', [Validators.required]],
      tipoAmbiente: ['', [Validators.required]],
    });
  }
  get capacidadField() {
    return this.form.get('capacidad');
  }

  get nombreField(){
    return this.form.get('nombre');
  }

}
