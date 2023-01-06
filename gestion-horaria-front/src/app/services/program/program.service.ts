import { Injectable } from '@angular/core';
import { readBuilderProgram } from 'typescript/lib/tsserverlibrary';
import {Program} from 'src/app/models/program.model';
@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor() { }

  programs:Program[]=[
    {id:'1',name:'Licenciatura'},
  ]
  getAllPrograms(){
    return this.programs;
  }
  getProgramById(id:string){
    const program: Program =this.programs.find(program=> program.id==id)!;
    return program
  }
}
