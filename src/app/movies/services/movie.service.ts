import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, timeout } from 'rxjs/operators';
import { Movie } from './movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public client: HttpClient) { }

  loadMovies(page: number): Observable<Movie[]> {
    return this.client.get<any>(environment.url + '/movie/popular?api_key='
      + environment.apiKey + '&language=es&page=' + page).pipe(
        map(x => x.results as Movie[])
      );
  }

}
