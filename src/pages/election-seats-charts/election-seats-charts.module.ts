import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectionSeatsChartsPage } from './election-seats-charts';
import { ChartsModule } from 'ng2-charts';

import 'chartjs-plugin-labels';

@NgModule({
  declarations: [
    ElectionSeatsChartsPage,
  ],
  imports: [
    IonicPageModule.forChild(ElectionSeatsChartsPage),
    ChartsModule
  ],
})
export class ElectionSeatsChartsPageModule {}
