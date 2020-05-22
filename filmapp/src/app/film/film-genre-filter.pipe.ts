import { Pipe, PipeTransform } from "@angular/core";
import { Film } from "./film.model";
@Pipe({
  name: "filmGenreFilter",
})
export class FilmGenreFilterPipe implements PipeTransform {
  transform(films: Film[], selected: string): Film[] {
    if (selected == "Alle genres") {
      return films;
    }
    if (selected == null) {
      return films;
    }

    return films.filter((film) =>
      film.filmGenres.find((fg) => fg.genreNaam == selected)
    );
  } // einde transform
}
