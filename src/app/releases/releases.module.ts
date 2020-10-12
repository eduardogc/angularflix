import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleasesRoutingModule } from './releases-routing.module';

import { ReleasesComponent } from './releases.component';

@NgModule({
  declarations: [
    ReleasesComponent
  ],
  imports: [
    CommonModule,
    ReleasesRoutingModule
  ]
})
export class ReleasesModule { }
