import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryDetailRoutingModule } from './category-detail-routing.module';

import { CategoryDetailComponent } from './category-detail.component';

@NgModule({
  declarations: [
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    CategoryDetailRoutingModule
  ]
})
export class CategoryDetailModule { }
