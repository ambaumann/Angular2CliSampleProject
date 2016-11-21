import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './header/header.component';
import { LoginModule } from './login/login.module';
import { SummaryModule } from './summary/summary.module';
import { TaskManagementModule, taskReducer } from './task-management/task-management.module';
import { WeatherModule, weatherReducer } from './weather/weather.module';

export { AppState } from './interfaces';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    // system modules
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([], {useHash: false}),
    StoreModule.provideStore({
      task: taskReducer,
      weather: weatherReducer
    }),
    // app modules
    CoreModule,
    LoginModule,
    SummaryModule,
    TaskManagementModule,
    WeatherModule
  ],
  providers: [ FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
