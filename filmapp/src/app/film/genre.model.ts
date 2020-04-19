interface GenreJson {
  genrenaam: string;
}

export class Genre {
  constructor(private _naam: string) {}

  static fromJSON(json: GenreJson): Genre {
    const genre = new Genre(json.genrenaam);
    return genre;
  }

  get naam(): string {
    return this._naam;
  }
}
