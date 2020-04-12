import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Film } from "./film.model";
import { Observable } from "rxjs";
import { FilmDataService } from "./film-data.service";

@Injectable({
  providedIn: "root",
})
export class FilmResolver implements Resolve<Film> {
  constructor(private filmService: FilmDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Film> {
    return this.filmService.detailsFilm$(route.params["titel"]);
    //  throw new Error("Method not implemented.");
  }
}
