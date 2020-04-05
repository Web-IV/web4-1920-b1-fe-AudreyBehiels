import { Injectable } from '@angular/core';
import {FILMS} from './mock-films';
import {Film} from './film.model';
import { HttpClient, HttpErrorResponse} from  '@angular/common/http'
import { environment } from 'src/environments/environment';
import {map, catchError, tap} from 'rxjs/operators';
import { Observable, pipe, EMPTY, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmDataService {
 // private _films = FILMS;

  constructor(private http: HttpClient ) {}

  get films$(): Observable<Film[]>{
    //return this._films;
    return this.http.get(`${environment.apiUrl}/films/`)
    .pipe( tap(console.log),
      catchError(this.handleError),
    map(
      (list: any[]): Film[] => list.map(Film.fromJSON)              
    ));
  }
  handleError(err: any) :Observable<never>{
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
