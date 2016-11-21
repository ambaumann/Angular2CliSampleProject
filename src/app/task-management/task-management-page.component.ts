import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskManagementService } from './task-management-service';

@Component({
  template: `
    <app-task-management></app-task-management>
    <button md-raised-button [disabled]="!((taskService.task1Selection$  | async) && (taskService.task2Selection$  | async))" (click)="summary()">Verify</button>
  `,
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementPageComponent {

  constructor(private router: Router, public taskService: TaskManagementService) { }

  summary() {
      this.router.navigate(['/summary']);
  }
}
