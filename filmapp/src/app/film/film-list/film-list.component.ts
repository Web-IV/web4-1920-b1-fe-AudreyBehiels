import { Component, OnInit } from "@angular/core";
import { FILMS } from "../mock-films";
import { FilmDataService } from "../film-data.service";
import { Observable, EMPTY } from "rxjs";
import { Film } from "../film.model";
import { catchError } from "rxjs/operators";
import { Genre } from "../genre.model";

@Component({
  selector: "app-film-list",
  templateUrl: "./film-list.component.html",
  styleUrls: ["./film-list.component.css"],
})
export class FilmListComponent implements OnInit {
  public filterFilmTitel: string;
  //private _films : Films[];
  private _fetchFilms$: Observable<Film[]>;
  private _fetchFilmsGenre$: Observable<Film[]>;
  private _fetchGenres$: Observable<Genre[]>;
  public errorMessage: string = "";
  public selected : String;

  constructor(private _filmDataService: FilmDataService) {
    /*this._filmDataService.films$.subscibe(
  film => this._films = film
  );*/
  }

  applyFilter(filter: string) {
    this.filterFilmTitel = filter;
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
    // return this._filmDataService.films$;
    return this._fetchFilms$;
  }
  ngOnInit(): void {
    (this._fetchFilms$ = this._filmDataService.films$.pipe(
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
      )),
      (this._fetchFilmsGenre$= this._filmDataService.filmsbyGenre$.pipe(
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        })
      ));
  }
}
