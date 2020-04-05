import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';
import {MaterialModule} from './../material/material.module';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmFilterPipe } from './film-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [FilmComponent, FilmListComponent, FilmFilterPipe],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [FilmListComponent]
})
export class FilmModule { }
