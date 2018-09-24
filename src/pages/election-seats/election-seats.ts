import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-election-seats',
  templateUrl: 'election-seats.html',
})
export class ElectionSeatsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // Chart Components
  public doughnutChartLabels: string[] = [
    'Party 1',
    'Party 2',
    'Party 3',
    'Party 4',
    'Party 5'
  ];

  public doughnutChartData: number[] = [
    17,
    141,
    80,
    32,
    30
  ];

  public doughnutChartType: string = 'doughnut';

  // Chart Click Events
  public chartClicked(event: any) {
    console.log(event);
  }

  public chartHovered(event: any) {
    console.log(event)
  }

}
