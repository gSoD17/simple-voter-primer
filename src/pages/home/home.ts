import { Component } from '@angular/core';
import { NavController, IonicPage, } from 'ionic-angular';

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
      this.dataFetch.fetchLocalData()

  }

  ionViewWillEnter() {
    
    this.dataFetch.countryGetter
      .subscribe(data => {
        this.countryData = data;
        console.log(this.countryData)
      })
    
  }

}
