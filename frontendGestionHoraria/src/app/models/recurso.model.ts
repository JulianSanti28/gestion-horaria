import { TipoRecurso } from "./tipoRecurso.model";

export interface Recurso{
  id:number;
  nombre:string;
  tipoRecurso:TipoRecurso;
}
