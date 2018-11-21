import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public move: number = 0;
  public turnLeft: number = 0;
  public ifThen: number = 0;
  public grab: number = 0;

  constructor(public navCtrl: NavController) {

  }
  moveEvent(){
    this.move++
  }
  turnLeftEvent(){
    this.turnLeft++
  }
  ifThenEvent(){
    this.ifThen++
  }
  grabEvent(){
    this.grab++
  }
}
