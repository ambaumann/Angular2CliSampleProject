import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskManagementComponent } from './task-management.component';

const routes: Routes = [
  {path: 'task', component: TaskManagementComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaskManagementComponent]
})
export class TaskManagementModule { }
