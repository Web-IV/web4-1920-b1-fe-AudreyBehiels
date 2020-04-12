import { Injectable } from "@angular/core";
import { FILMS } from "./mock-films";
import { Film } from "./film.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map, catchError, tap } from "rxjs/operators";
import { Observable, pipe, EMPTY, throwError } from "rxjs";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class FilmDataService {
  // private _films = FILMS;
  private _film$: Observable<Film>;

  constructor(private http: HttpClient) {}

  get films$(): Observable<Film[]> {
    //return this._films;
    return this.http.get(`${environment.apiUrl}/films/`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map((list: any[]): Film[] => list.map(Film.fromJSON))
    );
  }

  get film$(): Observable<Film> {
    return this._film$;
  }

  detailsFilm$(titel: string): Observable<Film> {
    this._film$ = this.http
      .get(`${environment.apiUrl}/films/getFilmByTitle/${titel}`)
      .pipe(tap(console.log), catchError(this.handleError), map(Film.fromJSON));
    return this._film$;
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
