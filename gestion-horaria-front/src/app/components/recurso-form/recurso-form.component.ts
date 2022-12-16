import { Component, OnInit } from '@angular/core';

import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Recurso } from 'src/app/models/recurso.model';

import { RecursoService } from 'src/app/services/recurso.service';
@Component({
  selector: 'app-recurso-form',
  templateUrl: './recurso-form.component.html',
  styleUrls: ['./recurso-form.component.scss']
})
export class RecursoFormComponent implements OnInit {

  form!: FormGroup;
  id!: string;


  constructor(
    private formBuilder:FormBuilder,
    private recursoService:RecursoService,
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

  }

  save($event:Event){
    if (this.form.valid){
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  saveRecurso(event:Event){
    if (this.form.valid) {
      const recurso = this.form.value;

      const newAmbiente = this.recursoService.saveRecurso(recurso);
      
      //this.router.navigate(['./ambientes']);

      // .subscribe((newAmbiente) => {
      //   console.log(newAmbiente);
      //   this.router.navigate(['./ambientes']);
      // });
    }

  }



  private buildForm(){
    this.form = this.formBuilder.group({
      //id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      tipoRecurso: ['',[Validators.required]]
    });
  }
  get capacidadField() {
    return this.form.get('capacidad');
  }

  get nombreField(){
    return this.form.get('nombre');
  }

}
