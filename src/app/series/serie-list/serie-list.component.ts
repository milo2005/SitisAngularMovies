import { Component, OnInit } from '@angular/core';
import { SerieService } from '../services/serie.service';
import { SerieResult } from '../services/serie.model';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  data: SerieResult;

  constructor(public service: SerieService) {
    service.listPopular(1)
      .subscribe(x => this.data = x, err => console.log(err));

  }

  

  ngOnInit() {
  }

}
