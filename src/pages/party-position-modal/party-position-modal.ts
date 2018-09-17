import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-party-position-modal',
  templateUrl: 'party-position-modal.html',
})
export class PartyPositionModalPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
    ) {
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
