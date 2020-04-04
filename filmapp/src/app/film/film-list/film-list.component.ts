import { Component, OnInit } from '@angular/core';
import { FILMS } from "../mock-films";

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})

export class FilmListComponent implements OnInit {
  private _films = FILMS;
  constructor() {}

  get films() {
    return this._films;
  }
  ngOnInit(): void {}
}
