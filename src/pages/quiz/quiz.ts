import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataFetcherProvider } from '../../providers/data-fetcher/data-fetcher';

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  quizData: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dataFetch: DataFetcherProvider
    ) {
  }

  ionViewWillEnter() {

    this.dataFetch.fetchQuizData()
      .subscribe(data => this.quizData = data)

  }

}
