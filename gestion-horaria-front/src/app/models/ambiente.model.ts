import { TipoAmbiente } from "./tipoAmbiente.model";
export interface Ambiente{
  idAmbiente:number;
  nombre:string;
  ubicacion:string;
  capacidad:number;
  descripcion:string;
  tipoAmbiente:TipoAmbiente;
}
