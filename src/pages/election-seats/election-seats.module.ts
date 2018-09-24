import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectionSeatsPage } from './election-seats';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ElectionSeatsPage,
  ],
  imports: [
    IonicPageModule.forChild(ElectionSeatsPage),
    ChartsModule
  ],
})
export class ElectionSeatsPageModule {}
