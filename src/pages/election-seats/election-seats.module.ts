import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectionSeatsPage } from './election-seats';

@NgModule({
  declarations: [
    ElectionSeatsPage,
  ],
  imports: [
    IonicPageModule.forChild(ElectionSeatsPage)
  ],
})
export class ElectionSeatsPageModule {}
