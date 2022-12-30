import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResourceService } from 'src/app/services/resource/resource.service';

@Component({
  selector: 'app-resources-form',
  templateUrl: './resources-form.component.html',
  styleUrls: ['./resources-form.component.scss']
})
export class ResourcesFormComponent {

  form!: FormGroup;
  //si vamos a editar un ambiente el input de ese id deberia ser readonly=true osea is edit=true
  @Input('isEdit')isEdit!:boolean;
  resourceTypes:string[]=[]

  constructor(
    private formBuilder:FormBuilder,
    private router: Router,
    private resourceService:ResourceService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ){

    this.buildForm();
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', []],
      name: ['', [Validators.required]],
      resourceType: ['', [Validators.required]],
    });
  }
  onSelectedValue(event:Event){

    this.form.controls['resourceType'].setValue((event.target as HTMLInputElement).value);
  }
}
