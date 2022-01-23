import { Component } from '@angular/core';
import {IArtist} from "../../Interfaces/IArtist";
import {ArtistsService} from "../artists.service";

@Component({
  selector: 'app-artists-results',
  templateUrl: './artists-results.component.html',
  styleUrls: ['./artists-results.component.scss']
})
export class ArtistsResultsComponent { //implements OnInit {

  public errorMessage = '';
  public artists: IArtist[] = [];

  searchString: string = "";

  constructor(private artistsService: ArtistsService) {}

  searchArtist() {
    this.artistsService.getArtistList(this.searchString).subscribe({
      next: artists => {
        this.artists = artists;
      },
      error: err => (this.errorMessage = err)
    });
  }

  /*ngOnInit(): void {
  }*/

}
