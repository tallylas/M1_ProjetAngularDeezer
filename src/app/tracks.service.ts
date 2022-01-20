import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ITrack } from 'src/Interfaces/ITrack';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  private TracksResultsUrl: string = "";
  private trackUrl: string = "";
  constructor(private http: HttpClient) {}

  getTrackList(str: string): Observable<ITrack[]> {
    this.TracksResultsUrl =
      'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=' +
      str +
      '&offset=0&limit=10&type=${track}';
    return this.http.get(this.TracksResultsUrl).pipe(
      map((res: any) => res.data as ITrack[]),

      catchError(this.handleError)
    );
  }

  getTrack(id: number): Observable<ITrack> {
    this.trackUrl =
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/` + id;
    return this.http.get(this.trackUrl).pipe(
      map(res => res as ITrack),
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
