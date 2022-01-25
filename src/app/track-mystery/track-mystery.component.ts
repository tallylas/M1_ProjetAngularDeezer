import { Component, OnInit } from '@angular/core';
import {IArtist} from "../../Interfaces/IArtist";
import {IAlbum} from "../../Interfaces/iAlbum";
import {ITrack} from "../../Interfaces/ITrack";
import {TracksService} from "../tracks.service";
import {ActivatedRoute, Router} from "@angular/router";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-track-mystery',
  templateUrl: './track-mystery.component.html',
  styleUrls: ['./track-mystery.component.scss']
})
export class TrackMysteryComponent implements OnInit {

  public track: ITrack | undefined;
  public artist: IArtist | undefined;
  public album: IAlbum | undefined;
  public tracks: ITrack[] = [];
  private errorMessage: string = "";
  public isLoading:boolean=true;

  public constructor(
    private tracksService: TracksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit() {
    let id = Math.floor(Math.random() * (100000)) + 17800000;
    if (id) {
      this.getTrackDetails(id);
    }
  }

  private getTrackDetails(id: number) {
    forkJoin([
      this.tracksService.getTrack(id)
    ])
      .pipe()
      .subscribe({
        next: Results => {
          (this.track = Results[0]);
          this.isLoading=false;
          if (this.track.id === undefined){
            this.router.navigate(['/missing']);
          }
        },
        error: err => {
          this.errorMessage = err,
            this.router.navigate(['/error404']);
        }
      });
  }

  public reloadPage() {
    window.location.reload();
  }

}
