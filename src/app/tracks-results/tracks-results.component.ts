import { Component, OnInit } from '@angular/core';
import {TracksService} from "../tracks.service";
import {ITrack} from "../../Interfaces/ITrack";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracks-results',
  templateUrl: './tracks-results.component.html',
  styleUrls: ['./tracks-results.component.scss']
})
export class TracksResultsComponent {

  private errorMessage = '';
  public tracks: ITrack[] = [];
  public searchStringTrack: string = "";

  public constructor(private tracksService: TracksService, private router: Router) {}

  public searchTrack() {
    this.tracksService.getTrackList(this.searchStringTrack).subscribe({
      next: tracks => {
        this.tracks = tracks;
      },
      error: err => {
        this.errorMessage = err,
          this.router.navigate(['/error404']);
      }
    });
  }

}
