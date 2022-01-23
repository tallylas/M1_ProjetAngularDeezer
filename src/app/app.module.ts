import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ArtistsResultsComponent } from './artists-results/artists-results.component';
import { HomepageComponent } from './homepage/homepage.component';
import {FormsModule} from "@angular/forms";
import { ArtistInformationComponent } from './artist-information/artist-information.component';
import {NumberConversionPipe} from "./number-conversion.pipe";
import { MysteryComponent } from './artist-mystery/mystery.component';
import { TracksResultsComponent } from './tracks-results/tracks-results.component';
import { TrackInformationComponent } from './track-information/track-information.component';
import { DurationConversionPipe } from './duration-conversion.pipe';
import { TrackMysteryComponent } from './track-mystery/track-mystery.component';
import { AlbumInformationComponent } from './album-information/album-information.component';
import { Error404Component } from './error404/error404.component';
import { PubComponent } from './pub/pub.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsResultsComponent,
    HomepageComponent,
    ArtistInformationComponent,
    NumberConversionPipe,
    MysteryComponent,
    TracksResultsComponent,
    TrackInformationComponent,
    DurationConversionPipe,
    TrackMysteryComponent,
    AlbumInformationComponent,
    Error404Component,
    PubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
