import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataFetcherProvider } from '../../providers/data-fetcher/data-fetcher';

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  @ViewChild('slides') slides: any;

  quizData: any;
  choice: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dataFetch: DataFetcherProvider
    ) {
  }

  ionViewWillEnter() {
    this.slides.lockSwipes(true);

    this.dataFetch.fetchQuizData()
      .subscribe(data => this.quizData = data)

  }

  nextSlide() {
    this.slides.lockSwipes(false);        
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    console.log(this.choice)
  }

}
