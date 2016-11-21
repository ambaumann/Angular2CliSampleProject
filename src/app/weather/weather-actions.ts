import { Action } from '@ngrx/store';

export class WeatherActions {
  static SET_TEMP = 'SET_TEMP';
  static SET_LOCATION = 'LOAD_WEATHER';
  static LOAD_FAILED = 'LOAD_FAILED';

  setTemp(temp: number): Action {
      return {
          type: WeatherActions.SET_TEMP,
          payload: temp
      };
  }

  setLocation(name: string): Action {
    return {
      type: WeatherActions.SET_LOCATION,
      payload: name
    };
  }

  loadFailed(): Action {
      return {
          type: WeatherActions.LOAD_FAILED
      };
  }
}
