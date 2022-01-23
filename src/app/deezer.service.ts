import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  //public response : any;

  public constructor(private http : HttpClient) { }

  public getArtist(){
    const url : string = `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/artist'`;
    return this.http.get(url);
  }
}
