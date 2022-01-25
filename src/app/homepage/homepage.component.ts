import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArtist } from 'src/Interfaces/IArtist';
import { ITrack } from 'src/Interfaces/ITrack';
import { TracksService } from '../tracks.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  private errorMessage = '';
  public tracks: ITrack[] = [];
  public searchStringButton: string = "";
  public isLoading:boolean=false;
  public afficherInfos:boolean=false;
  private combinaison:number=0;
  public c1:boolean=false;
  public c2:boolean=false;
  public c3:boolean=false;
  public c4:boolean=false;
  public c5:boolean=false;
  public c6:boolean=false;
  public c7:boolean=false;
  public c8:boolean=false;
  public c9:boolean=false;
  public c10:boolean=false;

  public constructor(private tracksService : TracksService, private router : Router) {}

  public ngOnInit(): void {
    //Tirer une combinaison au hasard
    this.combinaison = Math.floor(Math.random() * (9)) + 1;

    switch(this.combinaison) {
      case 1: {
        this.c1=true;
        break;
      }
      case 2: {
        this.c2=true;
        break;
      }
      case 3: {
        this.c3=true;
        break;
      }
      case 4: {
        this.c4=true;
        break;
      }
      case 5: {
        this.c5=true;
        break;
      }
      case 6: {
        this.c6=true;
        break;
      }
      case 7: {
        this.c7=true;
        break;
      }
      case 8: {
        this.c8=true;
        break;
      }
      case 9: {
        this.c9=true;
        break;
      }
      case 10: {
        this.c10=true;
        break;
      }
      default: {
        window.location.reload();
        break;
      }
    }

  }

  public searchButton(str: string) {
    this.isLoading=true;
    this.searchStringButton = str;
    this.resultButton();
    this.afficherInfos = true;
  }

  public resultButton(){
    this.tracksService.getTrackListToDiscover(this.searchStringButton).subscribe({
      next: tracks => {
        this.tracks = tracks;
        this.isLoading=false;
      },
      error: err => {
        this.errorMessage = err,
          this.router.navigate(['/error404']);
      }
    });
  }

}
