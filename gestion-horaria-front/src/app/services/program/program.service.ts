import { Injectable } from '@angular/core';
import { readBuilderProgram } from 'typescript/lib/tsserverlibrary';
import {Program} from 'src/app/models/program.model';
@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor() { }

  programs:Program[]=[
    {program_id:'PIS',name:'INGENIERIA DE SISTEMAS',department_id:'1'},
    {program_id:'PIET',name:'INGENIERIA ELECTRONICA Y TELECOMUNICACIONES',department_id:'2'}

  ]
  getAllPrograms(){
    return this.programs;
  }
  getProgramById(id:string){
    const program: Program =this.programs.find(program=> program.program_id==id)!;
    return program
  }
}
