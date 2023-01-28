import { Schedule } from "./schedule.model"

export interface ResponseData{
  elements:any[]
  paginator:{
    totalItems:number,
    totalNumberPage:number
  }
}
