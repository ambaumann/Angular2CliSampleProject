import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { ApiService } from '../core/core.module';
import { Observable } from 'rxjs/Observable';
import { WeatherActions } from './weather-actions';


@Injectable()
export class WeatherEffects {
  @Effect()
  calculateTemp$ = this.actions$
    .ofType(WeatherActions.SET_LOCATION)
    .map(action => JSON.stringify(action.payload))
    .switchMap(payload => this.api.fetchForcast(+payload)
        .map(res => (this.weatherActions.setTemp(res.json().get('temp'))))
        .catch(() => Observable.of(this.weatherActions.loadFailed()))
    );

  constructor(
    private actions$: Actions,
    private api: ApiService,
    private weatherActions: WeatherActions,
    private store$: Store<AppState>
  ) {}
}
