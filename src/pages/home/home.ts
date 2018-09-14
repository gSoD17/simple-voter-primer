import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { DataFetcherProvider } from '../../providers/data-fetcher/data-fetcher';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countryData: any;

  constructor(
    public navCtrl: NavController, 
    public dataFetch: DataFetcherProvider
    ) {

  }

  ionViewDidLoad() {
    
    this.dataFetch.fetchLocalData().subscribe(data => {
      this.countryData = data;
    })
    
  }

}
