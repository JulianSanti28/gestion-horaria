export interface Professor{
  // TODO atributos de teacher
  id:number;
  name: string;

}
  export interface ProfesorDTO extends Omit<Professor,'availableResources'>
  {

  }

  export interface EnvironmentTypeEnumeration{
    type:string;
  }
