import { Component, OnInit } from '@angular/core';
import {IArtist} from "../../Interfaces/IArtist";
import {IAlbum} from "../../Interfaces/iAlbum";
import {ITrack} from "../../Interfaces/iTrack";
import {TracksService} from "../tracks.service";
import {ActivatedRoute, Router} from "@angular/router";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-track-information',
  templateUrl: './track-information.component.html',
  styleUrls: ['./track-information.component.scss']
})
export class TrackInformationComponent implements OnInit {

  artist: IArtist | undefined;
  albums: IAlbum[] = [];
  track: ITrack | undefined;
  errorMessage: string = "";
  constructor(
    private tracksService: TracksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
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
          (this.track = Results[0])
        },
        error: err => (this.errorMessage = err)
      });
  }
  onBack(): void {
    this.router.navigate(['/track']);
  }

}
