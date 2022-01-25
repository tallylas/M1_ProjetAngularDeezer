import { Component, OnInit } from '@angular/core';
import { IArtist } from 'src/Interfaces/IArtist';
import { ActivatedRoute, Router } from '@angular/router';
import { IAlbum } from 'src/Interfaces/iAlbum';
import { forkJoin } from 'rxjs';
import { ITrack } from 'src/Interfaces/ITrack';
import {ArtistsService} from "../artists.service";

@Component({
  selector: 'app-artist-information',
  templateUrl: './artist-information.component.html',
  styleUrls: ['./artist-information.component.scss']
})
export class ArtistInformationComponent implements OnInit {

  public artist: IArtist | undefined;
  public albums: IAlbum[] = [];
  public tracks: ITrack[] = [];
  private errorMessage: string = "";
  public isLoading:boolean=true;

  public constructor(
    private artistsService: ArtistsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getArtistDetails(id);
    }
  }
  private getArtistDetails(id: number) {
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
          if (this.artist.id === undefined){
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
