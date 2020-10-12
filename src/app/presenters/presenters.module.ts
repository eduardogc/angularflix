import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentersRoutingModule } from './presenters-routing.module';

import { PresentersComponent } from './presenters.component';

@NgModule({
  declarations: [
    PresentersComponent
  ],
  imports: [
    CommonModule,
    PresentersRoutingModule
  ]
})
export class PresentersModule { }
