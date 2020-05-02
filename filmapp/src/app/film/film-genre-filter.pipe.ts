import { Pipe, PipeTransform } from "@angular/core";
import { Film } from "./film.model";
import { FilmGenre } from "./filmGenre.model";
@Pipe({
  name: "filmGenreFilter",
})
export class FilmGenreFilterPipe implements PipeTransform {
  transform(films: Film[], selected: string): Film[] {
    if (selected == null) {
      return films;
    }

    return films.filter((film) =>
      film.filmGenres.find((fg) => fg.genreNaam == selected)
    );
  } // einde transform
}
