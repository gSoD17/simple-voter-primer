import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  myOptions = {
    responsive: true,
    legend: {
      labels: {
        usePointStyle: true
      },
      display:  true,
      position: 'top'
    },
    tooltips: {
      enabled: true,
      // mode: 'index',
      position: 'average',
      backgroundColor: 'rgba(0,0,0,0)',
      bodyFontSize: 10,
      bodyFontStyle: 'bold',
      bodyFontColor: 'black',
      caretSize: 0,
      displayColors: false,
      xAlign: 'right',
      yAlign: 'bottom',
      callbacks: {
         label: function(tooltipItem, data) {
            let xLabel = data.datasets[tooltipItem.datasetIndex].label;
            return xLabel;
         }
      }
    },
    scales: {
      xAxes: [{
        id: 'Conservative',
        position: 'top',
        scaleLabel: {
          display: true,
          labelString: 'Social Conservatism'
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
        id: 'Liberal',
        position: 'bottom',
        scaleLabel: {
          display: true,
          labelString: 'Social Liberalism'
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
        id: 'Economic Left',
        position: 'left',
        scaleLabel: {
          display: true,
          labelString: 'Economic Left'
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
        id: 'Economic Right',
        position: 'right',
        scaleLabel: {
          display: true,
          labelString: 'Economic Right'
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
    },
    
    showTooltips: true,
    showAllTooltips: true,
    onAnimationComplete: function() {
      this.showTooltip(this.datasets[0].points, true);
    }
  }

  //Plugin to always show tooltips
  // myPlugins = {
  //   beforeRender: function (chart) {
  //       if (chart.config.options.showAllTooltips) {
  //           // create an array of tooltips
  //           // we can't use the chart tooltip because there is only one tooltip per chart
  //           chart.pluginTooltips = [];
  //           chart.config.data.datasets.forEach(function (dataset, i) {
  //               chart.getDatasetMeta(i).data.forEach(function (sector, j) {
  //                   chart.pluginTooltips.push(new Chart.Tooltip({
  //                       _chart: chart.chart,
  //                       _chartInstance: chart,
  //                       _data: chart.data,
  //                       _options: chart.options.tooltips,
  //                       _active: [sector]
  //                   }, chart));
  //               });
  //           });

  //           // turn off normal tooltips
  //           chart.options.tooltips.enabled = false;
  //       }
  //   },
  //   afterDraw: function (chart, easing) {
  //       if (chart.config.options.showAllTooltips) {
  //           // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
  //           if (!chart.allTooltipsOnce) {
  //               if (easing !== 1)
  //                   return;
  //               chart.allTooltipsOnce = true;
  //           }

  //           // turn on tooltips
  //           chart.options.tooltips.enabled = true;
  //           Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
  //               tooltip.initialize();
  //               tooltip.update();
  //               // we don't actually need this since we are not animating tooltips
  //               tooltip.pivot();
  //               tooltip.transition(easing).draw();
  //           });
  //           chart.options.tooltips.enabled = false;
  //       }
  //   }
  // }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewWillEnter() {
    this.quizResults.x = this.navParams.get('resultLink1');
    this.quizResults.y = this.navParams.get('resultLink2');
    
    this.myChart = new Chart(this.scatterCanvas.nativeElement, {
      type: 'scatter',
      data: {
        datasets: [
          { label: 'You', data: [this.quizResults], pointStyle: 'triangle', pointRadius: 8, pointHoverRadius: 8, backgroundColor: '#000000' },
          { label: 'Centre Party', data: [{x: 9, y: -7}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#39944a' },
          { label: 'Liberals', data: [{x: 10, y: -4}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#0069b4' },
          { label: 'Social Democratic Party', data: [{x: -7, y: -4}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#ed1b34' },
          { label: 'Green Party', data: [{x: -12, y: -27}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#80aa4e' },
          { label: 'Left Party', data: [{x: -26, y: -12}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#b00000' },
          { label: 'Moderate Party', data: [{x: 16, y: 4}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#019cdb' },
          { label: 'Christian Democrats', data: [{x: 12, y: 2}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#2d338e' },
          { label: 'Sweden Democrats', data: [{x: 8, y: 25}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#fedf09' },
          { label: 'Republicans (USA)', data: [{x: 27, y: 22}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#800000' },
          { label: 'Democrats (USA)', data: [{x: 16, y: -2}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#00b0f3' }
        ]
      },
      options: this.myOptions,
      //plugins: this.myPlugins  //Plugin to always show tooltips
    })

  }

  dismissModal() {
    this.navCtrl.setRoot('TabsPage');
  }

}
