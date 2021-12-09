import { Component } from '@angular/core';
import {DeezerService} from "./deezer.service";
import {firstValueFrom, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-deezer-chloe-tali';

  public response : any

  constructor (private deezerService:DeezerService){}

  public async ngOnInit(){
    const obs$ : Observable<any> = this.deezerService.getArtist();
    this.response = await firstValueFrom (obs$);
  }

}
