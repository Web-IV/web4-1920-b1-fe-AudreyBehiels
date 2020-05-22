import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Film } from "../film.model";
import { FilmDataService } from "../film-data.service";
import { catchError } from "rxjs/internal/operators/catchError";
import { EMPTY } from "rxjs/internal/observable/empty";

@Component({
  selector: "app-eigen-film-lijst",
  templateUrl: "./eigen-film-lijst.component.html",
  styleUrls: ["./eigen-film-lijst.component.css"],
})
export class EigenFilmLijstComponent implements OnInit {
  public errorMessage: string;
  private _fetchFilmsEigenLijst$: Observable<Film[]>;
  constructor(private _filmDataService: FilmDataService) {}

  get filmsEigenLijst$(): Observable<Film[]> {
    return this._fetchFilmsEigenLijst$;
  }

  ngOnInit(): void {
    this._fetchFilmsEigenLijst$ = this._filmDataService.EigenLijstFilms$.pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }
}
