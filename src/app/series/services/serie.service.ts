import { Injectable } from '@angular/core';
import { SeriesModule } from '../series.module';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Serie, SerieResult } from './serie.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: SeriesModule
})
export class SerieService {

  constructor(public http: HttpClient) { }

  listPopular(page: number): Observable<SerieResult> {
    const url = `${environment.url}/tv/popular?api_key=${environment.apiKey}&language=es&page=${page}`;
    return this.http.get<any>(url);
  }

  getSerie(id: number): Observable<Serie> {
    const url = `${environment.url}/tv/${id}?api_key=${environment.apiKey}&language=es`;
    return this.http.get<any>(url);
  }

}
