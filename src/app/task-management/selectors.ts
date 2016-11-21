import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';

import { AppState } from '../app.module';
import { Selector } from '../core/core.module';


export function getTask1Selection(): Selector<AppState, Boolean> {
  return state$ => state$.map(state => state.task.task1Selected).distinctUntilChanged();
}

export function getTask2Selection(): Selector<AppState, Boolean> {
  return state$ => state$.map(state => state.task.task2Selected).distinctUntilChanged();
}
