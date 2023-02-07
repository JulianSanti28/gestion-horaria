import { Injectable } from '@angular/core';
import { readBuilderProgram } from 'typescript/lib/tsserverlibrary';
import {Program} from 'src/app/models/program.model';
import { HttpClient } from '@angular/common/http';
import { catchError, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  endPoint:string='api/program';
  constructor(
    private http : HttpClient
  ) { }

  programs:Program[]=[
    {program_id:'PIS',name:'INGENIERIA DE SISTEMAS',department_id:'1'},
    {program_id:'PIET',name:'INGENIERIA ELECTRONICA Y TELECOMUNICACIONES',department_id:'2'}

  ]

  getAllPrograms(){
    return of(this.programs);
    // return this.http.get<any>(this.endPoint+``).pipe(
    //   catchError((e) => {

    //     console.log('Error obteniendo todos los RECURSOS', e.error.mensaje, 'error');
    //     return throwError(e);

    //   })
    // );
  }
  getProgramById(id:string){
    const program: Program =this.programs.find(program=> program.program_id==id)!;
    return program
  }
}
