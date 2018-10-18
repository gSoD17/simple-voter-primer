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

  myChart: any;

  myOptions = {
    responsive: true,
    legend: {
      display:  false,
      position: 'bottom'
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      position: "average",
      backgroundColor: "rgba(0,0,0,0)",
      bodyFontSize: 10,
      bodyFontStyle: "bold",
      bodyFontColor: 'black',
      caretSize: 0,
      displayColors: false,
      xAlign: 'right',
      yAlign: 'bottom',
      callbacks: {
         label: function(tooltipItem, data) {
            var xLabel = data.datasets[tooltipItem.datasetIndex].label;
            return xLabel;
         }
      }
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
    },
    
    showTooltips: true,
    showAllTooltips: true,
    onAnimationComplete: function() {
      this.showTooltip(this.datasets[0].points, true);
    }
  }

  myPlugins = {
    beforeRender: function (chart) {
        if (chart.config.options.showAllTooltips) {
            // create an array of tooltips
            // we can't use the chart tooltip because there is only one tooltip per chart
            chart.pluginTooltips = [];
            chart.config.data.datasets.forEach(function (dataset, i) {
                chart.getDatasetMeta(i).data.forEach(function (sector, j) {
                    chart.pluginTooltips.push(new Chart.Tooltip({
                        _chart: chart.chart,
                        _chartInstance: chart,
                        _data: chart.data,
                        _options: chart.options.tooltips,
                        _active: [sector]
                    }, chart));
                });
            });

            // turn off normal tooltips
            chart.options.tooltips.enabled = false;
        }
    },
    afterDraw: function (chart, easing) {
        if (chart.config.options.showAllTooltips) {
            // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
            if (!chart.allTooltipsOnce) {
                if (easing !== 1)
                    return;
                chart.allTooltipsOnce = true;
            }

            // turn on tooltips
            chart.options.tooltips.enabled = true;
            Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
                tooltip.initialize();
                tooltip.update();
                // we don't actually need this since we are not animating tooltips
                tooltip.pivot();
                tooltip.transition(easing).draw();
            });
            chart.options.tooltips.enabled = false;
        }
    }
  }

  quizResults = {
    x: null,
    y: null
  }

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
          { label: 'You', data: [this.quizResults], pointRadius: 5, pointHoverRadius: 5, backgroundColor: '#000000' },
          { label: "Centre Party", data: [{x: 9, y: -7}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#39944a' },
          { label: "Christian Democrats", data: [{x: 12, y: 1}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#2d338e' },
          { label: "Green Party", data: [{x: -12, y: -27}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#80aa4e' },
          { label: "Left Party", data: [{x: -26, y: -12}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#b00000' },
          { label: "Liberals", data: [{x: 10, y: -4}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#0069b4' },
          { label: "Moderate Party", data: [{x: 16, y: 4}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#019cdb' },
          { label: "Social Democratic Party", data: [{x: -7, y: -4}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#ed1b34' },
          { label: "Sweden Democrats", data: [{x: 8, y: 25}], pointRadius: 4, pointHoverRadius: 4, backgroundColor: '#fedf09' }
        ]
      },
      options: this.myOptions,
      plugins: this.myPlugins
    })

  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
