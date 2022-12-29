import { Faculty } from "./faculty.model";
import { Resource } from "./resource.model";

export interface Environment
{
  id:number;
  name: string;
  location:string;
  capacity:number;
  //environmentType:EnvironmentTypeEnumeration ;
  environmentType:string;
  faculty:Faculty;
  availableResources:Resource[];


}

export interface EnvironmentTypeEnumeration{
  type:string;
}


