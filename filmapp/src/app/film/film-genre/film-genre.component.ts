import { Component, OnInit, Input } from '@angular/core';
import { FilmGenre } from '../filmGenre.model';

@Component({
  selector: 'app-film-genre',
  templateUrl: './film-genre.component.html',
  styleUrls: ['./film-genre.component.css']
})
export class FilmGenreComponent implements OnInit {

  @Input() filmGenre: FilmGenre;
  constructor() { }

  ngOnInit() { }

}
