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
      tooltips: {
        enabled: true,
        callbacks: {
          label: (tooltipItem, data) => {
            let dataset = data.datasets[tooltipItem.datasetIndex];
            let total = dataset.data.reduce((previousValue, currentValue) => {
              return previousValue + currentValue;
            });
  
            let currentValue = dataset.data[tooltipItem.index];
            let percentage = Math.floor(((currentValue / total) * 100) + 0.5)
            return percentage + '% of parliamentary seats';
          }
        }
      },
      legend: { position: 'bottom' }
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
      this.seatsLink.reverse().forEach(data => {
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
