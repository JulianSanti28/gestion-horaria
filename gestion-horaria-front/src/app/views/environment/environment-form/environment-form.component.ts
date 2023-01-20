import { Component,Input ,Output,EventEmitter,AfterViewChecked, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Environment } from 'src/app/models/environment.model';
import { Faculty } from 'src/app/models/faculty.model';
import { EnvironmentService } from 'src/app/services/environment/environment.service';
@Component({
  selector: 'app-environment-form',
  templateUrl: './environment-form.component.html',
  styleUrls: ['./environment-form.component.scss']
})
export class EnvironmentFormComponent {
  form!: FormGroup;
  //si vamos a editar un ambiente el input de ese id deberia ser readonly=true osea is edit=true
  @Input('isEdit')isEdit!:boolean;

  //obtener el ambiente cuando me llega de edit
  @Input('environment')environment!:Environment;

  //obtener el ambiente del form cuando lo va a crear
  @Input('getEnvironment') getEnvironment!:boolean;

  //decirle al padre para mostrar añadir recursos al ambiente
  @Output()showAddResource = new EventEmitter<boolean>();

  //emitir al padre el abiente creado en el emmiter form
  @Output()emitterForm= new EventEmitter<Environment>();

  //variable para recolectar info del formulario
  formEnvironment:Environment={
    'id':0,
    'name':'',
    'location':'',
    'capacity':0,
    'environmentType':'',
    'facultyId':'',
    'availableResources':[]
  };
  environmentTypes:string[]=[]
  // facultys:Faculty[]=[];
  facultys:string[]=[];
  @Input() isSent:boolean=false
  constructor(
    private formBuilder:FormBuilder,
    private router: Router,
    private environmentService:EnvironmentService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ){

    this.buildForm();
  }
  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit():void{
    this.environmentTypes=this.environmentService.getAllEnvironmentTypes();
    this.facultys=this.environmentService.getAllFacultys();
    if(this.isEdit==true){
      const environmentFill={
        'id':this.environment.id,
        'name':this.environment.name,
        'location':this.environment.location,
        'capacity':this.environment.capacity,
        'environmentType':this.environment.environmentType,
        'faculty':this.environment.facultyId
      }
      this.form.patchValue(environmentFill);
    }


  }
  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', []],
      name: ['', [Validators.required]],
      location: ['',[Validators.required]],
      capacity: ['', [Validators.required]],
      environmentType: ['', [Validators.required]],
      faculty:['',[Validators.required]],
    });
  }

  onSelectedValue(event:Event){

    this.form.controls['environmentType'].setValue((event.target as HTMLInputElement).value);
  }
  onSelectedFaculty(event:Event){

    this.form.controls['faculty'].setValue((event.target as HTMLInputElement).value);
  }


  setValues(){
    // console.log("entra a set values ")
    this.formEnvironment.id=this.form.get('id')?.value;
    this.formEnvironment.name=this.form.get('name')?.value;
    this.formEnvironment.location=this.form.get('location')?.value;
    this.formEnvironment.capacity=this.form.get('capacity')?.value;
    this.formEnvironment.environmentType=this.form.get('environmentType')?.value;
    this.formEnvironment.facultyId=this.form.get('faculty')?.value;

    this.emitterForm.emit(this.formEnvironment);


  }
  showResource(){
    this.setValues();
    this.showAddResource.emit(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isSent']){
      if(changes['isSent'].currentValue == true ){
        // this.form.reset()
      }
    }

  }

}
