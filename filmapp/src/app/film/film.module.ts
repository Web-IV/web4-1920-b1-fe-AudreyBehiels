import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';
import {MaterialModule} from './../material/material.module';
import { FilmListComponent } from './film-list/film-list.component';


@NgModule({
  declarations: [FilmComponent, FilmListComponent],
  imports: [CommonModule, MaterialModule ],
  exports: [FilmComponent]
})
export class FilmModule { }
