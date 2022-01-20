import { Component, OnInit } from '@angular/core';
import {IArtist} from "../../Interfaces/IArtist";
import {IAlbum} from "../../Interfaces/iAlbum";
import {ITrack} from "../../Interfaces/iTrack";
import {TracksService} from "../tracks.service";
import {ActivatedRoute, Router} from "@angular/router";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-track-mystery',
  templateUrl: './track-mystery.component.html',
  styleUrls: ['./track-mystery.component.scss']
})
export class TrackMysteryComponent implements OnInit {

  track: ITrack | undefined;
  artist: IArtist | undefined;
  album: IAlbum | undefined;
  tracks: ITrack[] = [];
  errorMessage: string = "";

  constructor(
    private tracksService: TracksService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    let id = Math.floor(Math.random() * (100000)) + 17800000;
    if (id) {
      this.GetTrackDetails(id);
    }
  }

  GetTrackDetails(id: number) {
    forkJoin([
      this.tracksService.getTrack(id)
    ])
      .pipe()
      .subscribe({
        next: Results => {
          (this.track = Results[0]);
        },
        error: err => (this.errorMessage = err)
      });
  }

  reloadPage() {
    window.location.reload();
  }

}
