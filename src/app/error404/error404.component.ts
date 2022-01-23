import { Component, OnInit } from '@angular/core';
import {delay} from "rxjs";

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
    this.wait(5000);
  }
  private wait( ms: number){
    var temps=2000;//ici tu met le temps en millisecondes apres lequel tu veux que ton paragrapphe s'affiche...
    setTimeout("alert(message);",temps);
    setTimeout("document.getElementsByClassName('aAfficherPlusTard').style.display='block';",temps+1);
  }
}

