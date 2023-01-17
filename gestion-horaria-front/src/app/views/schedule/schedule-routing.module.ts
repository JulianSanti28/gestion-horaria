import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleCreateComponent } from './schedule-create/schedule-create.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'schedule',
    },
    children: [
      {
        path:'',
        redirectTo:'/all',
        pathMatch:'full'
      },
      {
        path: 'all',
        component: ScheduleCreateComponent,
        data: {
          title: 'all',
        }
      },
      {

        path:'create',
        component:ScheduleCreateComponent,
        data:{
          title:'create'
        }
      },
      {
        path:'detail',
        component:ScheduleDetailComponent,
        data:{
          title:'detail'
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule {

 }
