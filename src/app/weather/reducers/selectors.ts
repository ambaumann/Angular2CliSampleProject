import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';

import { AppState } from '../../app.module';
import { Selector } from '../../core/core.module';


export function getTemp(): Selector<AppState, number > {
  return state$ => state$.map(state => state.weather.temp).distinctUntilChanged();
}

export function getLocation(): Selector<AppState, string> {
  return state$ => state$.map(state => state.weather.location).distinctUntilChanged();
}

export function getIsError(): Selector<AppState, boolean> {
  return state$ => state$.map(state => state.weather.isError).distinctUntilChanged();
}
