import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent {
  @Input() error: Boolean;
  @Input() weatherLocation: string;

  @Output() enterPress = new EventEmitter<string>();
  @Output() onChange = new EventEmitter<string>();
  constructor() {
    console.log("weatherLocation " + this.weatherLocation);
  }

  onSave(value: string): void {
    console.log("On Save: " + value);
    this.onChange.emit(value);
  }
}
