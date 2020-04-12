import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FilmModule } from "./film/film.module";
import { MaterialModule } from "./material/material.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    FilmModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    CommonModule,
  ],
  exports: [BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule {}
