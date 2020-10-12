import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';

import { LoungeInfoComponent } from './components/series-list/lounge-info/lounge-info.component';
import { LoungeItemComponent } from './components/series-list/lounge-item/lounge-item.component';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { SeriesListComponent } from './components/series-list/series-list.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    LoungeInfoComponent,
    LoungeItemComponent,
    ProgramListComponent,
    SeriesListComponent
  ],
  exports: [
    TranslateModule,
    ProgramListComponent,
    SeriesListComponent
  ]
})
export class SharedModule { }
