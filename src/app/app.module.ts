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
import { MysteryComponent } from './mystery/mystery.component';
import { TracksResultsComponent } from './tracks-results/tracks-results.component';
import { TrackInformationComponent } from './track-information/track-information.component';


/*import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ConvertToDurationPipe } from './convert-to-duration.pipe';
import { ShortNumberPipe } from './short-number.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArtistDetailsGuard } from './artist-details/artist-details.guard';
import { ConvertToYearPipe } from './convert-to-year.pipe';*/

@NgModule({
  declarations: [
    AppComponent,
    ArtistsResultsComponent,
    HomepageComponent,
    ArtistInformationComponent,
    NumberConversionPipe,
    MysteryComponent,
    TracksResultsComponent,
    TrackInformationComponent
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
