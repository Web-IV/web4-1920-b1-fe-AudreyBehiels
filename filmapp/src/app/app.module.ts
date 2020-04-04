import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmModule } from './film/film.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    BrowserModule,
    FilmModule,
    MaterialModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
