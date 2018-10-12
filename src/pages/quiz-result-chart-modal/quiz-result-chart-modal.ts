import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quiz-result-chart-modal',
  templateUrl: 'quiz-result-chart-modal.html',
})
export class QuizResultChartModalPage {

  xAxis: number;
  yAxis: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.xAxis = this.navParams.get('resultLink1')
      console.log(this.xAxis)
  }

}
