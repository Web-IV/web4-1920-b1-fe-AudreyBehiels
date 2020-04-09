export interface FilmSchrijverJson {
  schrijverNaam: string;
}

export class FilmSchrijver {
  constructor(private _schrijverNaam: string) {}

  static fromJSON(json: FilmSchrijverJson): FilmSchrijver {
    const filmSchrijver = new FilmSchrijver(json.schrijverNaam);
    return filmSchrijver;
  }

  get schrijverNaam() {
    return this._schrijverNaam;
  }
}
