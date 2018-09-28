import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataFetcherProvider } from '../../providers/data-fetcher/data-fetcher';

@IonicPage()
@Component({
  selector: 'page-parties',
  templateUrl: 'parties.html',
})
export class PartiesPage {

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
        this.countryData = data;
        console.log(this.countryData)
      })

  }

  gotoPartyDetails(party) {
    this.navCtrl.push('PartyInfoPage', { dataLink: party })
  }

}
