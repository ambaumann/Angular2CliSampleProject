import { Action, ActionReducer } from '@ngrx/store';
import { WeatherActions } from '../weather-actions';
import { WeatherState, WeatherStateRecord } from './weather-state';

export const initialState: WeatherState = new WeatherStateRecord() as WeatherState;

export const weatherReducer: ActionReducer<WeatherState> = (state: WeatherState = initialState, action: Action) => {
  let part: WeatherState = null;
  switch (action.type) {
    case WeatherActions.SET_TEMP:
      console.log('Set Temp');
      part = state.set('isError', false) as WeatherState;
      return part.set('temp', action.payload) as WeatherState;
    case WeatherActions.SET_LOCATION:
      console.log('Set Location in reducer.');
      part = state.set('location', action.payload) as WeatherState;
      part = part.set('isError', false) as WeatherState;
      console.log("Passing Here");
      return part;
    case WeatherActions.LOAD_FAILED:
      console.log('LOAD FAILED.');
      part = state.set('temp', initialState.temp) as WeatherState;
      part = part.set('location', initialState.location) as WeatherState;
      return part.set('isError', true) as WeatherState;
    default:
      return state;
  };
};
