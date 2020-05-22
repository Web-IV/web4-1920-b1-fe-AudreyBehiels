import { Component, OnInit } from "@angular/core";
import { FILMS } from "../mock-films";
import { FilmDataService } from "../film-data.service";
import { Observable, EMPTY, Subject, pipe } from "rxjs";
import { Film } from "../film.model";
import {
  catchError,
  distinctUntilChanged,
  debounceTime,
  map,
} from "rxjs/operators";
import { Genre } from "../genre.model";

@Component({
  selector: "app-film-list",
  templateUrl: "./film-list.component.html",
  styleUrls: ["./film-list.component.css"],
})
export class FilmListComponent implements OnInit {
  public filterFilmTitel: string;
  public filterFilmGenre: string;
  public filterFilmJaar: number;
  private _fetchFilms$: Observable<Film[]>;
  private _fetchFilmsGenre$: Observable<Film[]>;
  private _fetchGenres$: Observable<Genre[]>;
  public errorMessage: string;
  public selected: string;
  public filterFilm$ = new Subject<String>();

  constructor(private _filmDataService: FilmDataService) {
  
    this.filterFilm$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map((val) => val.toLowerCase())
      )
      .subscribe((val) => (this.filterFilmTitel = val));

    
  }

  applyFilter(filter: string) {
    this.filterFilmTitel = filter;
  }

  filterGenre(genre: string) {
    this.filterFilmGenre = genre;
    this._filmDataService._genre = genre;
  }
  applyJaarFilter(jaar: number) {
    this.filterFilmJaar = jaar;
  }
  /*get films() : Film[]{
    return this._films;
  }*/

  get genres$(): Observable<Genre[]> {
    return this._fetchGenres$;
  }

  get filmsGenre$(): Observable<Film[]> {
    return this._fetchFilmsGenre$;
  }
  get films$(): Observable<Film[]> {
    return this._fetchFilms$;
  }
  
  
  ngOnInit(): void {
    (this._fetchFilms$ = this._filmDataService.films$.pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    )),
      (this._fetchFilmsGenre$ = this._filmDataService.filmsbyGenre$.pipe(
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        })
      )),
      (this._fetchGenres$ = this._filmDataService.genres$.pipe(
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        })
      ));
  }
}
