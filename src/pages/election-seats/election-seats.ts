import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataFetcherProvider } from '../../providers/data-fetcher/data-fetcher';

@IonicPage()
@Component({
  selector: 'page-election-seats',
  templateUrl: 'election-seats.html',
})
export class ElectionSeatsPage {

  electionSeatsData: any;
  countryData: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dataFetch: DataFetcherProvider
    ) {
  }

  ionViewWillEnter() {

    this.dataFetch.countryGetter
      .subscribe(data => {
          data.forEach(countryData => {
           this.electionSeatsData = countryData.government.political_parties_election_seats;
         })
      })

  }

  gotoChartsPage(data) {
    this.navCtrl.push('ElectionSeatsChartsPage', { dataLink: data });
  }

}

