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
    y: null
  }

  myChart: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.quizResults.x = this.navParams.get('resultLink1');
    this.quizResults.y = this.navParams.get('resultLink2');
    
    this.myChart = new Chart(this.scatterCanvas.nativeElement, {
      type: 'scatter',
      data: {
        datasets: [
          { label: 'Your Results', data: [this.quizResults] }
        ]
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [{
            ticks: {
              display: false,
              beginAtZero: true,
              min: -28,
              max: 28
            }
          }],
          yAxes: [{
            ticks: {
              display: false,
              beginAtZero: true,
              min: -28,
              max: 28
            }
          }]
        }
      }
    })

  }

}
