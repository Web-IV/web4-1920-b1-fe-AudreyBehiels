export interface FilmGenreJson{
    genreNaam : string;
}

export class FilmGenre{
    constructor(
        private _genreNaam : string
    ){}


static fromJSON(json: FilmGenreJson):FilmGenre {
const filmGenre = new FilmGenre(json.genreNaam)
return filmGenre;
} 

get genreNaam() {
    return this._genreNaam;
}
}