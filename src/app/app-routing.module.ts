import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {ArtistsResultsComponent} from "./artists-results/artists-results.component";
import {ArtistInformationComponent} from "./artist-information/artist-information.component";
import {MysteryComponent} from "./artist-mystery/mystery.component";
import {TracksResultsComponent} from "./tracks-results/tracks-results.component";
import {TrackInformationComponent} from "./track-information/track-information.component";
import {TrackMysteryComponent} from "./track-mystery/track-mystery.component";
import {AlbumInformationComponent} from "./album-information/album-information.component";

//const routes: Routes = [];

const routes : Routes = [
  {path : 'artistMystery', component : MysteryComponent},
  {path : 'trackMystery', component : TrackMysteryComponent},
  {path : 'artist', component : ArtistsResultsComponent},
  {path : 'artist/:id', component : ArtistInformationComponent},
  {path : 'track', component : TracksResultsComponent},
  {path : 'track/:id', component : TrackInformationComponent},
  {path : 'album/:id', component : AlbumInformationComponent},
  {path : '', component : HomepageComponent},
  {path : '**', component : HomepageComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
