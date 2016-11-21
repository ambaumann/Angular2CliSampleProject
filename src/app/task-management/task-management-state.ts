import { Map, Record } from 'immutable';

export interface TaskSelection {
    task1Selected: Boolean;
    task2Selected: Boolean;
}

export interface TaskState extends TaskSelection, Map<string, Boolean> {}

export const TaskStateRecord = Record({
    task1Selected: false,
    task2Selected: false
});
