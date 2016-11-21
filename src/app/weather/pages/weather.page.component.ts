import { Component } from '@angular/core';
import { WeatherService } from '../weather-service';

@Component({
  templateUrl: './weather.page.component.html',
})
export class WeatherPageComponent {
  constructor(public weatherService: WeatherService) {}
}
