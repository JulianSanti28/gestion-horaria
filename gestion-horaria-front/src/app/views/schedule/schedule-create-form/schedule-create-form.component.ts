import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Program } from 'src/app/models/program.model';

import {ProgramService} from 'src/app/services/program/program.service';
@Component({
  selector: 'app-schedule-create-form',
  templateUrl: './schedule-create-form.component.html',
  styleUrls: ['./schedule-create-form.component.scss']
})
export class ScheduleCreateFormComponent {

  @Output() progress = new EventEmitter<number>()
  @Input('isEdit')isEdit!:boolean;
  progressMade:number=0;
  form!: FormGroup;
  sumProgres:number=10;

  programs:Program[]=[];
  semesters:number[]=[];

  constructor(
    private formBuilder:FormBuilder,
    private programService:ProgramService,

  ){

  }
  ngOnInit(){

    this.buildForm();
    this.programs=this.programService.getAllPrograms();
  }

  private buildForm(){
    this.form = this.formBuilder.group({

    });
  }

  onSelectedProgram(event:Event){
    //traer el numero de semestres de ese programa
    this.progress.emit(this.sumProgres)
  }
  onSelectedSemester(event:Event){
    //actualizar la tabla de
    this.progress.emit(this.sumProgres)
  }
}
