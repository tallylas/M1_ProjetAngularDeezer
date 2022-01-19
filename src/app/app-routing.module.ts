import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {ArtistsResultsComponent} from "./artists-results/artists-results.component";

//const routes: Routes = [];

const routes : Routes = [
  {path : 'artist', component : ArtistsResultsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
