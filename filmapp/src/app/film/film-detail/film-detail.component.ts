import { Component, OnInit, Input } from "@angular/core";
import { Film } from "../film.model";
import { ActivatedRoute } from "@angular/router";
import { FilmDataService } from "../film-data.service";
import { Observable, EMPTY } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthenticationService } from "src/app/user/authentication.service";

@Component({
  selector: "app-film-detail",
  templateUrl: "./film-detail.component.html",
  styleUrls: ["./film-detail.component.css"],
})
export class FilmDetailComponent implements OnInit {
  @Input() public film: Film;
  private _fetchFilm$: Observable<Film>;

  public confirmationMessage: string = "";
  public errorMessage: string = "";
  constructor(
    private _authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private _filmDataService: FilmDataService
  ) {}

  get film$(): Observable<Film> {
    return this._fetchFilm$;
  }

  ngOnInit() {
    this.route.data.subscribe((item) => (this.film = item["film"]));
    this._fetchFilm$ = this._filmDataService.film$.pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }

  verwijderFilm() {
    if (this._filmDataService.verwijderFilm$(this.film)) {
      console.log("Film is verwijderd");
    }
  }

  upvote() {
    this._filmDataService.upvoteFilm$(this.film);
    this.confirmationMessage = "Thumbs up voor " + this.film.titel;
  }

  ToevoegenAanEigenLijst() {
    console.log("ik wil toevoegen");
    this._filmDataService.ToevoegenAanEigenLijst$(this.film);
    this.confirmationMessage = this.film.titel + " is toegevoegd aan uw lijst";
  }

  isUserLoggedIn() {
    return this._authenticationService.isLoggedIn;
  }
  /*this.route.paramMap.subscribe(pa=> 
    this.filmDataService.detailsFilm(pa.get('titel'))
    .subscribe(item => (this.film = item)))
    */
}
