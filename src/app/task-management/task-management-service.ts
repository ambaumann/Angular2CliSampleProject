import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { AppState } from '../app.module';
import { TaskActions } from './task-management-actions';

import { getTask1Selection, getTask2Selection } from './selectors';
import { MdCheckboxChange } from '@angular/material/checkbox';

@Injectable()
export class TaskManagementService {
  task1Selection$: Observable<Boolean>;
  task2Selection$: Observable<Boolean>;

  constructor(private actions: TaskActions, private store$: Store<AppState>) {
    this.task1Selection$ = store$.let(getTask1Selection());
    this.task2Selection$ = store$.let(getTask2Selection());
  }

  setTask1(event: MdCheckboxChange): void {
    this.store$.dispatch(
      this.actions.selectTask1(event.checked)
    );
  }

  setTask2(event: MdCheckboxChange): void {
    this.store$.dispatch(
      this.actions.selectTask2(event.checked)
    );
  }
}
