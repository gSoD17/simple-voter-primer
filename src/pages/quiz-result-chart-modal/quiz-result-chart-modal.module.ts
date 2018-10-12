import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizResultChartModalPage } from './quiz-result-chart-modal';

@NgModule({
  declarations: [
    QuizResultChartModalPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizResultChartModalPage),
  ],
})
export class QuizResultChartModalPageModule {}
