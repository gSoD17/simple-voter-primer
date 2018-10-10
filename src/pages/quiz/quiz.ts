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
  selection: number;

  authLibScoreArray = [];

  mockChartInput = [
    {
      x: null,
      y: null
    }
  ]

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

  startQuiz() {
    this.slides.lockSwipes(false);        
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  nextSlide() {      
    if(!this.selection) {
      this.slides.lockSwipes(true)
    }
    else if(this.selection) {
      this.slides.lockSwipes(false);  
      this.slides.slideNext();

      this.authLibScoreArray.push(this.selection)
      this.selection = null;
    }
    
    console.log(this.authLibScoreArray)
  }

  previousSlide() {
    this.slides.lockSwipes(false);  
    this.slides.slidePrev();
    this.slides.lockSwipes(true)

    this.authLibScoreArray.splice(-1, 1);
    console.log(this.authLibScoreArray);
  }

  submit() {
    let result = this.authLibScoreArray
      .map(v => parseInt(v, 10))
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0)

    this.mockChartInput[0].x = result
    console.log(this.mockChartInput)
  }

}
