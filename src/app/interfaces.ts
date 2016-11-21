import { TaskState } from './task-management/task-management.module';
import { WeatherState } from './weather/weather.module';
export interface AppState {
    task: TaskState;
    weather: WeatherState;
}
