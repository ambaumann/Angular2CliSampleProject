import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { AppState } from '../app.module';
import { WeatherActions } from './weather-actions';

import { getTemp, getLocation, getIsError } from './reducers/selectors';

@Injectable()
export class WeatherService {
    //how to make computed observables?
  tempAvailable$: Observable<Boolean>;
  temp$: Observable<number>;
  location$: Observable<string>;
  error$: Observable<boolean>;

  constructor(private actions: WeatherActions, private store$: Store<AppState>) {
    this.temp$ = store$.let(getTemp());
    this.location$ = store$.let(getLocation());
    this.error$ = store$.let(getIsError());
  }

  setLocation(location: string): void{
      console.log("Setting Location Method Called " + location);
      this.store$.dispatch(this.actions.setLocation(location));
  }
}
