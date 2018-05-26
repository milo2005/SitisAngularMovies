import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../services/movie.model';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  data: Movie[] = [];

  constructor(public service: MovieService) {
    service.loadMovies(1)
      .subscribe(x => this.data = x);
  }

  ngOnInit() {
  }

  goToDetail(movie: Movie) {

  }

}
