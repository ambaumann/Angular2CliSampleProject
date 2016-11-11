import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary.component';

const routes: Routes = [
  {path: 'summary', component: SummaryComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SummaryComponent]
})
export class SummaryModule { }
