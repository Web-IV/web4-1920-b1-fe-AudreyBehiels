import { Pipe, PipeTransform } from '@angular/core';
import { Film } from './film.model';
import { isEmpty } from 'rxjs/operators';

@Pipe({
  name: 'filmJaarFilter'
})
export class FilmJaarFilterPipe implements PipeTransform {

  transform(films: Film[], jaar: number): Film[] {
    console.log(jaar);
    if (!jaar ) {
      return films;
    }
    return films.filter(
      (film) => film.jaar ==jaar
    )
  }

}
