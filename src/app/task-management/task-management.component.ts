import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit {
  check1: Boolean = false;
  check2: Boolean = false;

  constructor(private router: Router) { }

  isDisabled(): Boolean {
    return !(this.check1 && this.check2);
  }

  summary() {
    this.router.navigate(['/summary']);
  }

  setCheck1(event: MdCheckboxChange) {
    this.check1 = event.checked;
  }

  setCheck2(event: MdCheckboxChange) {
    this.check2 = event.checked;
  }

  ngOnInit() {
  }

}
