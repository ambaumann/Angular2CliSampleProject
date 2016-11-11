import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginModule } from './login/login.module';
import { SummaryModule } from './summary/summary.module';
import { TaskManagementModule } from './task-management/task-management.module';

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
    RouterModule.forRoot([], {useHash: false}),
    MaterialModule.forRoot(),
    // app modules
    LoginModule,
    SummaryModule,
    TaskManagementModule
  ],
  providers: [ FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
