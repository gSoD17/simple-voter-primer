import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-quiz-result-chart-modal',
  templateUrl: 'quiz-result-chart-modal.html',
})
export class QuizResultChartModalPage {

  @ViewChild('scatterCanvas') scatterCanvas;

  quizResults = {
    x: null,
    y: 10
  }

  myChart: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.quizResults.x = this.navParams.get('resultLink1');
    
    this.myChart = new Chart(this.scatterCanvas.nativeElement, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          data: [
            this.quizResults,
            {
              x: -5,
              y: 11
            },
            {
              x: 1,
              y: -3
            }
          ]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom'
          }]
        }
      }
    })

  }

}
