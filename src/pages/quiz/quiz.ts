import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

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
  isSlideEnd: boolean;

  authLibScoreArray = [];
  leftRightScoreArray = [];

  mockChartInput = [
    {
      x: null,
      y: null
    }
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dataFetch: DataFetcherProvider,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
    ) {
  }

  ionViewWillEnter() {
    this.slides.lockSwipes(true);

    this.dataFetch.fetchQuizData()
      .subscribe(data => this.quizData = data);

  }

  startQuiz() {
    this.slides.lockSwipes(false);        
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  nextSlide(quizData) {      
    if(!this.selection) {
      this.slides.lockSwipes(true);
      this.noSelectionAlert();
    }
    else if(this.selection && quizData.axesType === 'Authoritarian-Libertarian') {
      if(quizData.flipResponseValues === true) {
        this.slides.lockSwipes(false);  
        this.slides.slideNext();

        this.authLibScoreArray.push(this.selection * -1);
        this.selection = null;
      }
      else {
        this.slides.lockSwipes(false);
        this.slides.slideNext();

        this.authLibScoreArray.push(this.selection * 1);
        this.selection = null;
      }
    }
    else if(this.selection && quizData.axesType === 'Economic-Left-Right') {
      if(quizData.flipResponseValues === true) {
        this.slides.lockSwipes(false);
        this.slides.slideNext();

        this.leftRightScoreArray.push(this.selection * -1);
        this.selection = null;
      }
      else {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
  
        this.leftRightScoreArray.push(this.selection * 1);
        this.selection = null;
      }
    }
    
    this.slides.lockSwipes(true);
    this.isSlideEnd = this.slides.isEnd();
  }

  previousSlide(quizData) {
    this.slides.lockSwipes(false);  
    this.slides.slidePrev();
    this.slides.lockSwipes(true);

    if(quizData.axesType === 'Authoritarian-Libertarian') {
      this.authLibScoreArray.splice(-1, 1);
    }
    else if(quizData.axesType === 'Economic-Left-Right') {
      this.leftRightScoreArray.splice(-1, 1);
    }
  }

  submit() { 
    if(!this.selection) {
      this.slides.lockSwipes(true);
    }

    else {
      let resultXAxis = this.leftRightScoreArray
        .reduce((acc, curr) => {
          return acc + curr;
        }, 0);
  
      let resultYAxis = this.authLibScoreArray
        .reduce((acc, curr) => {
          return acc + curr;
        }, 0);
  
      let quizChartModal = this.modalCtrl.create('QuizResultChartModalPage', {resultLink1: resultXAxis, resultLink2: resultYAxis});
  
      this.mockChartInput[0].x = resultXAxis;
      this.mockChartInput[0].y = resultYAxis;
  
      quizChartModal.present();
    }
  }

  noSelectionAlert() {
    let alert = this.alertCtrl.create({
      title: 'No Answer Selected!',
      subTitle: 'Please select an answer before continuing.',
      buttons: ['Ok']
    })

    alert.present();
  }

}
