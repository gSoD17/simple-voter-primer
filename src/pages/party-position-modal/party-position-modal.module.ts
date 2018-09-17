import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartyPositionModalPage } from './party-position-modal';

@NgModule({
  declarations: [
    PartyPositionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PartyPositionModalPage),
  ],
})
export class PartyPositionModalPageModule {}
