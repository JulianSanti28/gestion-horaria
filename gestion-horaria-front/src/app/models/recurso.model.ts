import { TipoRecurso } from "./tipoRecurso.model";

export interface Recurso{
  idRecurso:number;
  nombre:string;
  tipoRecurso:TipoRecurso;
}
