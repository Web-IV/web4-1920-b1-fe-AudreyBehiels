import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilmComponent } from "./film/film.component";
import { MaterialModule } from "./../material/material.module";
import { FilmListComponent } from "./film-list/film-list.component";
import { FilmFilterPipe } from "./film-filter.pipe";
import { HttpClientModule } from "@angular/common/http";
import { FilmGenreComponent } from "./film-genre/film-genre.component";
import { FilmSchrijverComponent } from "./film-schrijver/film-schrijver.component";
import { FilmActeurComponent } from "./film-acteur/film-acteur.component";
import { FilmDetailComponent } from "./film-detail/film-detail.component";
import { FilmResolver } from "./FilmResolver";
import { RouterModule, Routes } from "@angular/router";
import { MatSelectModule } from "@angular/material/select";
import { FilmGenreFilterPipe } from "./film-genre-filter.pipe";
import { FilmJaarFilterPipe } from "./film-jaar-filter.pipe";
import { EigenFilmLijstComponent } from "./eigen-film-lijst/eigen-film-lijst.component";

const routes: Routes = [
  {
    path: "lijst",
    component: FilmListComponent,
  },
  {
    path: "eigenLijst",
    component: EigenFilmLijstComponent,
  },
  {
    path: "detailFilm/:titel",
    component: FilmDetailComponent,
    pathMatch: "full",
    resolve: { film: FilmResolver },
  },
];

@NgModule({
  declarations: [
    FilmComponent,
    FilmListComponent,
    FilmFilterPipe,
    FilmGenreComponent,
    FilmSchrijverComponent,
    FilmActeurComponent,
    FilmDetailComponent,
    FilmGenreFilterPipe,
    FilmJaarFilterPipe,
    EigenFilmLijstComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ],
  exports: [FilmListComponent],
})
export class FilmModule {}
