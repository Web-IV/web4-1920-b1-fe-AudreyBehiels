export interface FilmActeurJson {
  acteurNaam: string;
}

export class FilmActeur {
  constructor(private _acteurNaam: string) {}

  static fromJSON(json: FilmActeurJson): FilmActeur {
    const filmActeur = new FilmActeur(json.acteurNaam);
    return filmActeur;
  }

  get acteurNaam() {
    return this._acteurNaam;
  }
}
