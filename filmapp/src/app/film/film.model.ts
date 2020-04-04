interface FilmJson {
  titel: string;
  jaar: string;
  duur: string;
  regisseur: string;
  genres: string[];
  schrijvers: string[];
  acteurs: string[];
  productiebedrijf: string;
  korteInhoud: string;
}

export class Film {
  constructor(
    private _titel: string,
    private _jaar = new Date(),
    private _duur: string,
    private _regisseur: string,
    private _genres = new Array<string>(),
    private _schrijvers = new Array<string>(),
    private _acteurs = new Array<string>(),
    private _productiebedrijf: string,
    private _korteInhoud: string
  ) {}

  static fromJSON(json: FilmJson): Film {
    const film = new Film(
      json.titel,
      new Date(json.jaar),
      json.duur,
      json.regisseur,
      json.genres,
      json.schrijvers,
      json.acteurs,
      json.productiebedrijf,
      json.korteInhoud
    );
    return film;
  }

  get titel(): string {
    return this._titel;
  }
  get jaar(): Date {
    return this._jaar;
  }
  get duur(): string {
    return this._duur;
  }
  get regisseur(): string {
    return this._regisseur;
  }
  get genres(): string[] {
    return this._genres;
  }
  get schrijvers(): string[] {
    return this._schrijvers;
  }
  get acteurs(): string[] {
    return this._acteurs;
  }
  get productiebedrijf(): string {
    return this._productiebedrijf;
  }
  get korteInhoud(): string {
    return this._korteInhoud;
  }
}
