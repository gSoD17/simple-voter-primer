import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectionSeatsChartsPage } from './election-seats-charts';

@NgModule({
  declarations: [
    ElectionSeatsChartsPage,
  ],
  imports: [
    IonicPageModule.forChild(ElectionSeatsChartsPage),
  ],
})
export class ElectionSeatsChartsPageModule {}
