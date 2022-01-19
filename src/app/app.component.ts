import { Component } from '@angular/core';
import {DeezerService} from "./deezer.service";
import {firstValueFrom, Observable} from "rxjs";
import {IArtist} from "../Interfaces/IArtist";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-deezer-chloe-tali';

  //prof
  //public response : any

  //artists: IArtist[] = [bla, blou];

  //prof
  //constructor (private deezerService:DeezerService){}

  //prof (3 lignes)
  /*public async ngOnInit(){
    const obs$ : Observable<any> = this.deezerService.getArtist();
    this.response = await firstValueFrom (obs$);

    //Test

    //this.ArtistListUrl =
    //  'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=' +
    //  str +
    //  '&offset=0&limit=10&type=${artist}';
    //return this.http.get(this.ArtistListUrl).pipe(
    //  map((res: any) => res.data as IArtist[]),

  }*/

}
