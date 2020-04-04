import { Injectable } from '@angular/core';
import {FILMS} from './mock-films';
import {Film} from './film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmDataService {
  private _films = FILMS;

  constructor() { }

  get films() : Film[]{
    return this._films;
  }

}
