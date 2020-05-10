import { Injectable } from "@angular/core";
import { Film } from "./film.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map, catchError, tap } from "rxjs/operators";
import { Observable, pipe, EMPTY, throwError } from "rxjs";
import { Genre } from "./genre.model";
@Injectable({
  providedIn: "root",
})
export class FilmDataService {
  // private _films = FILMS;
  private _film$: Observable<Film>;
  private _filmsByGenre$: Observable<Film[]>;
  public _genre: string;
  constructor(private http: HttpClient) {}


  get films$(): Observable<Film[]> {
    return this.http.get(`${environment.apiUrl}/films/`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map((list: any[]): Film[] => list.map(Film.fromJSON))
    );
  }

  get genres$(): Observable<Genre[]> {
    return this.http.get(`${environment.apiUrl}/films/getgenres/`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map((list: any[]): Genre[] => list.map(Genre.fromJSON))
    );
  }

  get film$(): Observable<Film> {
    return this._film$;
  }

  get filmsbyGenre$(): Observable<Film[]> {
    //return this._filmsByGenre$;
    return this.http
      .get(`${environment.apiUrl}/films/getfilmsbygenre/${this._genre}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError),
        map((list: any[]): Film[] => list.map(Film.fromJSON))
      );
  }

  detailsFilm$(titel: string): Observable<Film> {
    this._film$ = this.http
      .get(`${environment.apiUrl}/films/getFilmByTitle/${titel}`)
      .pipe(tap(console.log), catchError(this.handleError), map(Film.fromJSON));
    return this._film$;
  }

  filmsByGenre$(genre: string): Observable<Film[]> {
    this._genre = genre;
    this._filmsByGenre$ = this.http
      .get(`${environment.apiUrl}/films/getfilmsbygenre/${genre}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError),
        map((list: any[]): Film[] => list.map(Film.fromJSON))
      );
    return this._filmsByGenre$;
  }

  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = `an unknown error occurred ${err}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
