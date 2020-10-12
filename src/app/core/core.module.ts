import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { BaseService } from './services/base.service';
import { HeaderService } from './services/header.service';
import { HomeService } from './services/home.service';
import { KidsService } from './services/kids.service';
import { LiveService } from './services/live.service';
import { PlayerService } from './services/player.service';
import { ReleasesService } from './services/releases.service';
import { SeriesListService } from './services/series-list.service';

import { ArraySortPipe } from './pipes/array-sort.pipe';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { throwIfAlreadyLoaded } from './module-import-guard';


@NgModule({
  declarations: [
    ArraySortPipe,
    AutocompleteComponent,
    FooterComponent,
    HeaderComponent,
    SearchHeaderComponent,
    SidebarComponent,
    ArraySortPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    ArraySortPipe,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  providers: [
    BaseService,
    HeaderService,
    HomeService,
    PlayerService,
    KidsService,
    LiveService,
    ReleasesService,
    SeriesListService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
