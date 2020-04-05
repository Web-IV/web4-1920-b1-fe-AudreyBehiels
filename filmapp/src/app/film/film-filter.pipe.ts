import { Pipe, PipeTransform } from "@angular/core";
import { Film } from "./film.model";
@Pipe({
  name: "filmFilter",
})
export class FilmFilterPipe implements PipeTransform {
  transform(films: Film[], titel: string): Film[] {
    if (!titel || titel.length === 0) {
      return films;
    }
    return films.filter(
      (film) => film.titel.toLowerCase() == titel.toLowerCase()
    );
  }
}
