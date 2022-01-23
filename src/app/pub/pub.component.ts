import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.scss']
})
export class PubComponent implements OnInit {

  constructor() { }

  public numPub:number=Math.floor(Math.random() * (9)) + 1;
  public pubVisible:boolean=true;

  ngOnInit(): void {

  }

  public onClickClose(){
    this.pubVisible=false;
  }

}
