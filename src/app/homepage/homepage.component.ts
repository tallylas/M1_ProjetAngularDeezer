import { Component, OnInit } from '@angular/core';
import { IArtist } from 'src/Interfaces/IArtist';
import { ITrack } from 'src/Interfaces/ITrack';
import { TracksService } from '../tracks.service';
//import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  errorMessage = '';
  tracks: ITrack[] = [];
  searchStringButton: string = "";
  isLoading:boolean=false;
  afficherInfos:boolean=false;
  combinaison:number=0;
  c1:boolean=false;
  c2:boolean=false;
  c3:boolean=false;
  c4:boolean=false;
  c5:boolean=false;
  c6:boolean=false;
  c7:boolean=false;
  c8:boolean=false;
  c9:boolean=false;
  c10:boolean=false;

  constructor(private tracksService : TracksService
  ) {}

  ngOnInit(): void {
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

  searchButton(str: string) {
    this.isLoading=true;
    this.searchStringButton = str;
    this.resultButton();
    this.afficherInfos = true;
  }

  resultButton(){
    this.tracksService.getTrackListToDiscover(this.searchStringButton).subscribe({
      next: tracks => {
        this.tracks = tracks;
        this.isLoading=false;
      },
      error: err => (this.errorMessage = err)
    });
  }

}
