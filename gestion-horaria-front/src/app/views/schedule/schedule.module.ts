import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleCreateComponent } from './schedule-create/schedule-create.component';
import { ScheduleCreateFormComponent } from './schedule-create-form/schedule-create-form.component';

import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ScheduleBeforeCreateFormComponent } from './schedule-before-create-form/schedule-before-create-form.component';
import { CoursesComponent } from './courses/courses.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ScheduleCreateComponent,
    ScheduleCreateFormComponent,
    ScheduleBeforeCreateFormComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,

    FormsModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule
  ]
})
export class ScheduleModule {

}
