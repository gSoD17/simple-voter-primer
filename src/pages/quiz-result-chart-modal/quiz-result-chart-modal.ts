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
          { label: 'You', data: [this.quizResults], pointRadius: 5, pointHoverRadius: 5, backgroundColor: '#FF69B4' },
          { label: "Green Party", data: [{x: -15, y: -28}], pointRadius: 5, pointHoverRadius: 5, backgroundColor: '#80aa4e' },
          { label: "Centre Party", data: [{x: 17, y: -7}], pointRadius: 5, pointHoverRadius: 5, backgroundColor: '#39944a' }
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom'
        },
        scales: {
          xAxes: [{
            id: 'Authoritarian',
            position: 'top',
            scaleLabel: {
              display: true,
              labelString: 'Authoritarian'
            },
            gridLines: {
              color: '#ffffff'
            },
            ticks: {
              display: false,
              beginAtZero: true,
              min: -28,
              max: 28
            }
          }, {
            id: 'Libertarian',
            position: 'bottom',
            scaleLabel: {
              display: true,
              labelString: 'Libertarian'
            },
            gridLines: {
              color: '#ffffff'
            },
            ticks: {
              display: false,
              beginAtZero: true,
              min: -28,
              max: 38
            }
          }],
          yAxes: [{
            id: 'Left-Wing',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'Left-Wing'
            },
            gridLines: {
              color: '#ffffff'
            },
            ticks: {
              display: false,
              beginAtZero: true,
              min: -28,
              max: 28
            }
          }, {
            id: 'Right-Wing',
            position: 'right',
            scaleLabel: {
              display: true,
              labelString: 'Right-Wing'
            },
            gridLines: {
              color: '#ffffff'
            },
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
