import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskActions } from './task-management-actions';
import { TaskManagementComponent } from './task-management.component';
import { TaskManagementPageComponent } from './task-management-page.component';
import { TaskManagementService } from './task-management-service';


export { TaskActions, TaskManagementService }
export { TaskState } from './task-management-state';
export { taskReducer } from './task-management-reducer';

const routes: Routes = [
  {path: 'task', component: TaskManagementPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TaskManagementComponent,
    TaskManagementPageComponent
  ],
  providers: [
    TaskManagementService,
    TaskActions
  ]
})
export class TaskManagementModule {  }
