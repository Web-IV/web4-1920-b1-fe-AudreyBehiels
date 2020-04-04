import { Component, OnInit } from "@angular/core";
import { FILMS } from "../mock-films";
import { FilmDataService } from "../film-data.service";

@Component({
  selector: "app-film-list",
  templateUrl: "./film-list.component.html",
  styleUrls: ["./film-list.component.css"]
})
export class FilmListComponent implements OnInit {
  // private _films = FILMS;
  constructor(private _filmDataService: FilmDataService) {}

  get films() {
    return this._filmDataService.films;
  }
  ngOnInit(): void {}
}
