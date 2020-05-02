import { FilmGenreJson, FilmGenre } from "./filmGenre.model";
import { FilmSchrijver, FilmSchrijverJson } from "./filmSchrijver.model";
import { FilmActeur, FilmActeurJson } from "./filmActeur.model";

interface FilmJson {
  id: number;
  titel: string;
  jaar: number;
  duur: string;
  regisseur: string;
  filmGenres: FilmGenreJson[];
  filmSchrijvers: FilmSchrijverJson[];
  filmActeurs: FilmActeurJson[];
  productiebedrijf: string;
  korteInhoud: string;
}

export class Film {
  private _id: number;
  constructor(
    private _titel: string,
    private _jaar: number,
    private _duur: string,
    private _regisseur: string,
    private _filmGenres = new Array<FilmGenre>(),
    private _filmSchrijvers = new Array<FilmSchrijver>(),
    private _filmActeurs = new Array<FilmActeur>(),
    private _productiebedrijf: string,
    private _korteInhoud: string
  ) {}

  static fromJSON(json: FilmJson): Film {
    const film = new Film(
      json.titel,
      json.jaar,
      json.duur,
      json.regisseur,
      json.filmGenres.map(FilmGenre.fromJSON),
      json.filmSchrijvers.map(FilmSchrijver.fromJSON),
      json.filmActeurs.map(FilmActeur.fromJSON),
      json.productiebedrijf,
      json.korteInhoud
    );
    film._id = json.id;
    return film;
  }
  get id(): number {
    return this._id;
  }

  get titel(): string {
    return this._titel;
  }
  get jaar(): number {
    return this._jaar;
  }
  get duur(): string {
    return this._duur;
  }
  get regisseur(): string {
    return this._regisseur;
  }
  get filmGenres(): FilmGenre[] {
    return this._filmGenres;
  }
  get filmSchrijvers(): FilmSchrijver[] {
    return this._filmSchrijvers;
  }
  get filmActeurs(): FilmActeur[] {
    return this._filmActeurs;
  }
  get productiebedrijf(): string {
    return this._productiebedrijf;
  }
  get korteInhoud(): string {
    return this._korteInhoud;
  }
}
