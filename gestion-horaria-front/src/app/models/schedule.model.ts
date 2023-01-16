import { Course } from "./course.model";
import { Environment } from "./environment.model";

export interface Schedule{

  id:number;
  day:string;
  startingTime:string;
  endingTime:string;
  course:Course;
  environment:Environment;
}
