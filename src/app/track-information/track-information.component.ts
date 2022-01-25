import { Component, OnInit } from '@angular/core';
import {IArtist} from "../../Interfaces/IArtist";
import {IAlbum} from "../../Interfaces/iAlbum";
import {ITrack} from "../../Interfaces/ITrack";
import {TracksService} from "../tracks.service";
import {ActivatedRoute, Router} from "@angular/router";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-track-information',
  templateUrl: './track-information.component.html',
  styleUrls: ['./track-information.component.scss']
})
export class TrackInformationComponent implements OnInit {

  public artist: IArtist | undefined;
  public albums: IAlbum[] = [];
  public track: ITrack | undefined;
  private errorMessage: string = "";
  public isLoading:boolean=true;

  public constructor(
    private tracksService: TracksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
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
          (this.track = Results[0])
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

}
