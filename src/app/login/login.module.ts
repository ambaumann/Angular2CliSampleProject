import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
