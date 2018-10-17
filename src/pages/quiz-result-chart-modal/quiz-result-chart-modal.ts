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
          { label: "Centre Party", data: [{x: 9, y: -7}], pointRadius: 5, pointHoverRadius: 5, backgroundColor: '#39944a' },
          { label: "Christian Democrats", data: [{x: 12, y: 1}], pointRadius: 5, pointHoverRadius: 5, backgroundColor: '#2d338e' },
          { label: "Green Party", data: [{x: -12, y: -27}], pointRadius: 5, pointHoverRadius: 5, backgroundColor: '#80aa4e' },
          { label: "Left Party", data: [{x: -26, y: -12}], pointRadius: 5, pointHoverRadius: 5, backgroundColor: '#b00000' },
          { label: "Liberals", data: [{x: 10, y: -4}], pointRadius: 5, pointHoverRadius: 5, backgroundColor: '#0069b4' },
          { label: "Moderate Party", data: [{x: 16, y: 8}], pointRadius: 5, pointHoverRadius: 5, backgroundColor: '#019cdb' },
          { label: "Social Democratic Party", data: [{x: -7, y: -4}], pointRadius: 5, pointHoverRadius: 5, backgroundColor: '#ed1b34' },
          { label: "Sweden Democrats", data: [{x: 8, y: 26}], pointRadius: 5, pointHoverRadius: 5, backgroundColor: '#fedf09' }
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom'
        },
        tooltips: {
          enabled: true
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
              min: -30,
              max: 30
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
              min: -30,
              max: 30
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
              min: -30,
              max: 30
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
              min: -30,
              max: 30
            }
          }]
        }
      }
    })

  }

}
