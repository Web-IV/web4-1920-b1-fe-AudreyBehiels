import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';
import {MaterialModule} from './../material/material.module';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmFilterPipe } from './film-filter.pipe';

@NgModule({
  declarations: [FilmComponent, FilmListComponent, FilmFilterPipe],
  imports: [CommonModule, MaterialModule ],
  exports: [FilmListComponent]
})
export class FilmModule { }
