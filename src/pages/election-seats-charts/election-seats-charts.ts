import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-election-seats-charts',
  templateUrl: 'election-seats-charts.html',
})
export class ElectionSeatsChartsPage {

  seatsLink: any;

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartColors: Array<any> = [];
  public ChartOptions: any = {
    options: {
      legend: { 
        labels: {
          usePointStyle: true
        },
        position: 'bottom' 
      },
      tooltips: {
        enabled: true,
        callbacks: {
          afterLabel: () => {
            return 'seats'
          }
        }
      },
      plugins: {
        labels: {
          render: 'percentage',
          fontSize: 14,
          fontColor: '#ffffff',
          fontStyle: 'bold'
        }
      },
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI
    }
  };
  public doughnutChartType: string = 'doughnut';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {

      let chartData = [];
      let chartLabels = [];
      let chartColors = [
        {
          backgroundColor: []
        }
      ]

      this.seatsLink = this.navParams.get('dataLink');
      this.seatsLink.forEach(data => {
        chartData.push(data.seats);
        chartLabels.push(data.party);
        chartColors[0].backgroundColor.push(data.color_code)
      })

      this.doughnutChartLabels = chartLabels;
      this.doughnutChartData = chartData;
      this.doughnutChartColors = chartColors;
  }

  // Chart Click Events
  public chartClicked():void {
  }

  public chartHovered():void {
  }

}
