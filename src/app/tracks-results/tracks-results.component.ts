import { Component, OnInit } from '@angular/core';
import {TracksService} from "../tracks.service";
import {ITrack} from "../../Interfaces/iTrack";

@Component({
  selector: 'app-tracks-results',
  templateUrl: './tracks-results.component.html',
  styleUrls: ['./tracks-results.component.scss']
})
export class TracksResultsComponent {

  errorMessage = '';
  tracks: ITrack[] = [];

  searchStringTrack: string = "";

  constructor(private tracksService: TracksService) {}

  searchTrack() {
    this.tracksService.getTrackList(this.searchStringTrack).subscribe({
      next: tracks => {
        this.tracks = tracks;
      },
      error: err => (this.errorMessage = err)
    });
  }

}
