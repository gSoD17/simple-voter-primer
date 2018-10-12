import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quiz-result-chart-modal',
  templateUrl: 'quiz-result-chart-modal.html',
})
export class QuizResultChartModalPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

}
