import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';
import {MaterialModule} from './../material/material.module';


@NgModule({
  declarations: [FilmComponent],
  imports: [CommonModule, MaterialModule ],
  exports: [FilmComponent]
})
export class FilmModule { }
