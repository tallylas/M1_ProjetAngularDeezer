import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private http : HttpClient) { }

  public getArtist(){
    const url : string = `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/track/autocomplete?limit=1&q=eminem'`;
    return this.http.get(url);
  }
}
