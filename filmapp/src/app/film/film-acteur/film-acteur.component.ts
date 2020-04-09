import { Component, OnInit, Input } from "@angular/core";
import { FilmActeur } from "../filmActeur.model";

@Component({
  selector: "app-film-acteur",
  templateUrl: "./film-acteur.component.html",
  styleUrls: ["./film-acteur.component.css"],
})
export class FilmActeurComponent implements OnInit {
  @Input() filmActeur: FilmActeur;
  constructor() {}

  ngOnInit(): void {}
}
