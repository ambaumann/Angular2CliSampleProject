import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { WeatherActions } from './weather-actions';
import { WeatherComponent } from './components/weather.component';
import { WeatherPageComponent } from './pages/weather.page.component';
import { WeatherEffects } from './weather-effects';
import { WeatherService } from './weather-service';


export { WeatherActions, WeatherService }
export { WeatherState } from './reducers/weather-state';
export { weatherReducer } from './reducers/weather-reducer';

const routes: Routes = [
  {path: 'weather', component: WeatherPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.run(WeatherEffects),
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WeatherComponent,
    WeatherPageComponent
  ],
  providers: [
    WeatherService,
    WeatherActions
  ]
})
export class WeatherModule {  }