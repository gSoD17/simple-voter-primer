import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-party-info',
  templateUrl: 'party-info.html',
})
export class PartyInfoPage {

  partyLink: {}[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
    ) {
      this.partyLink = this.navParams.get('dataLink');
  }

  expandPolicyModal() {
    let positionsModal = this.modalCtrl.create('PartyPositionModalPage');
    positionsModal.present();
  }

}
