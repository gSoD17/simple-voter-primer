import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-election-seats-charts',
  templateUrl: 'election-seats-charts.html',
})
export class ElectionSeatsChartsPage {

  seatsLink: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
      this.seatsLink = this.navParams.get('dataLink')
  }

}
