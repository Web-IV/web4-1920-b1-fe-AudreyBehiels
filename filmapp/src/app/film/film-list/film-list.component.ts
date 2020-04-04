import { Component, OnInit } from "@angular/core";
import { FILMS } from "../mock-films";
import { FilmDataService } from "../film-data.service";

@Component({
  selector: "app-film-list",
  templateUrl: "./film-list.component.html",
  styleUrls: ["./film-list.component.css"]
})
export class FilmListComponent implements OnInit {
  public filterFilmTitel: string;

  constructor(private _filmDataService: FilmDataService) {}

  applyFilter(filter: string) {
    this.filterFilmTitel = filter;
  }

  get films() {
    return this._filmDataService.films;
  }
  ngOnInit(): void {}
}
