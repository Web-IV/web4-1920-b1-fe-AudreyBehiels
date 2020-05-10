import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { FilmListComponent } from "./film/film-list/film-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FilmDetailComponent } from "./film/film-detail/film-detail.component";
import { AuthGuard } from "./user/auth.guard";
import { LoginComponent } from "./user/login/login.component";
import { RegisterComponent } from "./user/register/register.component";

const appRoutes: Routes = [
  {
    path: "films",
    //canActivate: [ AuthGuard ],
    loadChildren: () =>
      import("./film/film.module").then((mod) => mod.FilmModule),
    data: { preload: true },
  },

  { path: "account", component: LoginComponent },
  { path: "account/registreer", component: RegisterComponent },

  { path: "", redirectTo: "films/lijst", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: PreloadAllModules }
      /*{ enableTracing: true }*/
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
