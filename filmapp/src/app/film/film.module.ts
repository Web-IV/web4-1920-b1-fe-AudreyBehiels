import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';
import {MaterialModule} from './../material/material.module';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmFilterPipe } from './film-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FilmGenreComponent } from './film-genre/film-genre.component';
import { FilmSchrijverComponent } from './film-schrijver/film-schrijver.component';
import { FilmActeurComponent } from './film-acteur/film-acteur.component';
@NgModule({
  declarations: [FilmComponent, FilmListComponent, FilmFilterPipe,FilmGenreComponent, FilmSchrijverComponent, FilmActeurComponent],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [FilmListComponent]
})
export class FilmModule { }
