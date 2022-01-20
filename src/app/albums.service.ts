import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {ITrack} from "../Interfaces/ITrack";
import {IAlbum} from "../Interfaces/iAlbum";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private albumUrl: string = "";
  private tracksUrl: string = "";
  constructor(private http: HttpClient) {}

  getAlbum(id: number): Observable<IAlbum> {
    this.albumUrl =
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/` + id;
    return this.http.get(this.albumUrl).pipe(
      map(res => res as IAlbum),
      catchError(this.handleError)
    );
  }


  getTracks(id: number): Observable<ITrack[]> {
    this.tracksUrl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks&offset=0`;
    return this.http.get(this.tracksUrl).pipe(
      map((res: any) => res.data as ITrack[]),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    return throwError(errorMessage);
  }
}
