import { Component, OnInit } from "@angular/core";
import { FILMS } from "../mock-films";
import { FilmDataService } from "../film-data.service";
import { Observable, EMPTY } from 'rxjs';
import { Film } from '../film.model';
import { catchError } from 'rxjs/operators';

@Component({
  selector: "app-film-list",
  templateUrl: "./film-list.component.html",
  styleUrls: ["./film-list.component.css"]
})
export class FilmListComponent implements OnInit {
  public filterFilmTitel: string;
  //private _films : Films[];
private _fetchFilms$: Observable<Film[]>;
public errorMessage: string ='';

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

  get films$():Observable<Film[]> {
   // return this._filmDataService.films$;
   return this._fetchFilms$;
  }
  ngOnInit(): void {
   this._fetchFilms$ = 
    this._filmDataService.films$.pipe(
      catchError( err => {
        this.errorMessage = err;
        return EMPTY;
      })
    )
  }
}
