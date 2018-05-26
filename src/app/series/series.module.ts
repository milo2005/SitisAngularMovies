import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SeriesComponent } from './series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SharedModule } from '../shared/shared.module';
import { SerieService } from './services/serie.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [SeriesComponent, SerieDetailComponent, SerieListComponent],
  providers: [SerieService]
})
export class SeriesModule { }
