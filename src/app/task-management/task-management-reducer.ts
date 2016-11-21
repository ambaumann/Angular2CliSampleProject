import { Action, ActionReducer } from '@ngrx/store';
import { TaskActions } from './task-management-actions';
import { TaskState, TaskStateRecord } from './task-management-state';

export const initialState: TaskState = new TaskStateRecord() as TaskState;

export const taskReducer: ActionReducer<TaskState> = (state: TaskState = initialState, action: Action) => {
  switch (action.type) {
    case TaskActions.SELECT_TASK:
      console.log('Selecting A Task.');
      return state.set('task' + action.payload.number + 'Selected', action.payload.value) as TaskState;
    default:
      return state;
  };
};
