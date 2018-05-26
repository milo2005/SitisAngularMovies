import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../movies/services/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  movie: Movie;

  constructor() { }

  ngOnInit() {
  }

  getUrlImage(): string {
    return '';
  }

}
