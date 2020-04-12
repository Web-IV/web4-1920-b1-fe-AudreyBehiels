import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { FilmListComponent } from "./film/film-list/film-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FilmDetailComponent } from "./film/film-detail/film-detail.component";

const appRoutes: Routes = [
  {
    path: "film",
    loadChildren: () =>
      import("./film/film.module")
      .then((mod) => mod.FilmModule),
      data: {preload:true}
  },
  
  { path: "", redirectTo: "film/lijst", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
   CommonModule,
    RouterModule.forRoot(appRoutes, 
       {preloadingStrategy: PreloadAllModules},
      /*{ enableTracing: true }*/)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
