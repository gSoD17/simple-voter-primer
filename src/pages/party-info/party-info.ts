import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-party-info',
  templateUrl: 'party-info.html',
})
export class PartyInfoPage {

  partyLink: {}[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
      this.partyLink = this.navParams.get('dataLink');
  }

}
