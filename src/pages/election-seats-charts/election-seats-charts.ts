import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-election-seats-charts',
  templateUrl: 'election-seats-charts.html',
})
export class ElectionSeatsChartsPage {

  seatsLink: any;

  public doughNutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartColors: Array<any> = [];
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

      console.log(chartLabels)
      this.doughNutChartLabels = chartLabels;
      this.doughnutChartData = chartData;
      this.doughnutChartColors = chartColors;
  }

  // Chart Click Events
  public chartClicked(event: any):void {
    console.log(event);
  }

  public chartHovered(event: any):void {
    console.log(event)
  }

}
