import { Component, OnInit } from '@angular/core';
import { IArtist } from 'src/Interfaces/IArtist';
import { ITrack } from 'src/Interfaces/ITrack';
import { TracksService } from '../tracks.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  errorMessage = '';
  tracks: ITrack[] = [];

  constructor(private tracksService: TracksService) {}

  ngOnInit(): void {
    this.tracksService.getTrackListToDiscover().subscribe({
      next: tracks => {
        this.tracks = tracks;
      },
      error: err => (this.errorMessage = err)
    });
  }

}
