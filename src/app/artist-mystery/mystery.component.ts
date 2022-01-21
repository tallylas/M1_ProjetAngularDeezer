import { Component, OnInit } from '@angular/core';
import {IArtist} from "../../Interfaces/IArtist";
import {ArtistsService} from "../artists.service";
import {ActivatedRoute, Router} from "@angular/router";
import {forkJoin} from "rxjs";
import { IAlbum } from 'src/Interfaces/iAlbum';
import { ITrack } from 'src/Interfaces/ITrack';

@Component({
  selector: 'app-mystery',
  templateUrl: './mystery.component.html',
  styleUrls: ['./mystery.component.scss']
})
export class MysteryComponent implements OnInit {

  artist: IArtist | undefined;
  albums: IAlbum[] = [];
  tracks: ITrack[] = [];
  errorMessage: string = "";
  isLoading:boolean=true;

  constructor(
    private artistsService: ArtistsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    let id = Math.floor(Math.random() * (1000)) + 1;
    if (id) {
      this.GetArtistDetails(id);
    }
  }

  GetArtistDetails(id: number) {
    forkJoin([
      this.artistsService.getArtist(id),
      this.artistsService.getAlbums(id),
      this.artistsService.getTopTracks(id)
    ])
      .pipe()
      .subscribe({
        next: Results => {
          (this.artist = Results[0]),
            (this.albums = Results[1]),
            (this.tracks = Results[2]);
          this.isLoading=false;
        },
        error: err => (this.errorMessage = err)
      });
  }

  reloadPage() {
    window.location.reload();
  }
}

