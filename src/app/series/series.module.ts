import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SeriesComponent } from './series.component';
import { SerieCardComponent } from './serie-card/serie-card.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [SeriesComponent, SerieCardComponent, SerieDetailComponent, SerieListComponent]
})
export class SeriesModule { }
