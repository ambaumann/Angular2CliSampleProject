import { Map, Record } from 'immutable';

export interface Temp {
    temp: number;
    location: string;
    isError: boolean;
}

export interface WeatherState extends Temp, Map<string, number | string | boolean> {}

export const WeatherStateRecord = Record({
    temp: -1,
    location: 'nowhere',
    isError: false
});
