import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {IArtist} from "../../Interfaces/IArtist";
import {ArtistsService} from "../artists.service";

@Component({
  selector: 'app-artists-results',
  templateUrl: './artists-results.component.html',
  styleUrls: ['./artists-results.component.scss']
})
export class ArtistsResultsComponent {

  private errorMessage = '';
  public artists: IArtist[] = [];
  public searchString: string = "";

  public constructor(private artistsService: ArtistsService, private router: Router) {}

  public searchArtist() {
    this.artistsService.getArtistList(this.searchString).subscribe({
      next: artists => {
        this.artists = artists;
      },
      error: err => {
        this.errorMessage = err,
          this.router.navigate(['/error404']);
      }
    });
  }

}
