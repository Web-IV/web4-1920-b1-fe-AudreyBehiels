import { Pipe, PipeTransform } from "@angular/core";
import { Film } from "./film.model";

@Pipe({
  name: "filmJaarFilter",
})
export class FilmJaarFilterPipe implements PipeTransform {
  transform(films: Film[], jaar: number): Film[] {
    // console.log(jaar); // werkt
    if (!jaar) {
      return films;
    }
    return films.filter((film) => film.jaar == jaar);
  }
}
