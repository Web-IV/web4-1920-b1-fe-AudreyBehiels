import { Component, OnInit, Input } from "@angular/core";
import { Film } from "../film.model";
import { FilmDataService } from "../film-data.service";
import { Router } from "@angular/router";
import { CombineLatestSubscriber } from "rxjs/internal/observable/combineLatest";
import { FilmDetailComponent } from "../film-detail/film-detail.component";

@Component({
  selector: "app-film",
  templateUrl: "./film.component.html",
  styleUrls: ["./film.component.css"],
})
export class FilmComponent implements OnInit {
  @Input() public film: Film;

  constructor(
    private _filmDataService: FilmDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.router;
  }

  detailsFilm(titel: string) {
    console.log("geklikt, " + titel);
    this.router.navigate(["films/detailFilm/", titel]);
    this._filmDataService.detailsFilm$(titel);
  }
}
