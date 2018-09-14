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

  ionViewDidLoad() {

    this.dataFetch.fetchLocalData().subscribe(data => {
      console.log(data)
      this.countryData = data;
    })

  }

}
