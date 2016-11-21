import { Action } from '@ngrx/store';

export class TaskActions {
  static SELECT_TASK = 'SELECT_TASK';

  selectTask1(setTask: boolean): Action {
    return {
      type: TaskActions.SELECT_TASK,
      payload: {number: 1, value: setTask}
    };
  }

  selectTask2(setTask: boolean): Action {
    return {
      type: TaskActions.SELECT_TASK,
      payload: {number: 2, value: setTask}
    };
  }
}
