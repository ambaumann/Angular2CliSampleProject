import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './api-service/api-service';

export { ApiService };
export * from './interfaces';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService
  ]
})
export class CoreModule { }
