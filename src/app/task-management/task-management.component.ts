import { Component } from '@angular/core';
import { TaskManagementService } from './task-management-service';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent {

  constructor(public taskService: TaskManagementService) { }
}
