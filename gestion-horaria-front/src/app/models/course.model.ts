import {Period} from './period.model'
import {Subject} from './subject.model'
import {Teacher} from './teacher.model';
export interface Course{

  courseId: number;
  courseGroup:string;
  courseCapacity:number;
  periodId:string;
  subjectCode:string;
  teacherCode:string;
  // period:Period;
  // subject:Subject;
  // teacher:Teacher;
}
