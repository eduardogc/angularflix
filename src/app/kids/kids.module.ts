import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';

import { KidsComponent } from './kids.component';

@NgModule({
  declarations: [
    KidsComponent
  ],
  imports: [
    CommonModule,
    KidsRoutingModule
  ]
})
export class KidsModule { }
