import { Component, OnInit } from '@angular/core';
import {IAlbum} from "../../Interfaces/iAlbum";
import {ITrack} from "../../Interfaces/ITrack";
import {AlbumsService} from "../albums.service";
import {ActivatedRoute, Router} from "@angular/router";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-album-information',
  templateUrl: './album-information.component.html',
  styleUrls: ['./album-information.component.scss']
})
export class AlbumInformationComponent implements OnInit {

  album: IAlbum | undefined;
  tracks: ITrack[] = [];
  errorMessage: string = "";
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getAlbumDetails(id);
    }
  }
  getAlbumDetails(id: number) {
    forkJoin([
      this.albumsService.getAlbum(id),
      this.albumsService.getTracks(id)
    ])
      .pipe()
      .subscribe({
        next: Results => {
          (this.album = Results[0]),
            (this.tracks = Results[1]);
        },
        error: err => (this.errorMessage = err)
      });
  }

}
