import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataFetcherProvider } from '../../providers/data-fetcher/data-fetcher';

@IonicPage()
@Component({
  selector: 'page-election-seats',
  templateUrl: 'election-seats.html',
})
export class ElectionSeatsPage {

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartType: string = 'doughnut';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dataFetch: DataFetcherProvider
    ) {
  }

  ionViewWillEnter() {

    let seatsData = [];
    let nameData = [];

    this.dataFetch.fetchLocalData().subscribe(data => {
      data.forEach(countryData => {
        countryData.government.political_parties_and_leaders.forEach(parties => {
          parties.seat_share.forEach(results => { 
            seatsData.push(results.seats)
          })

          nameData.push(parties.name)
        })
      })
      this.doughnutChartLabels = nameData;
      this.doughnutChartData = seatsData;
      console.log(this.doughnutChartData);
    })

  }

  // // Chart Components
  // public doughnutChartLabels: string[] = [
  //   'Party 1',
  //   'Party 2',
  //   'Party 3',
  //   'Party 4',
  //   'Party 5',
  //   'Party 6',
  //   'Party 7',
  //   'Party 8'
  // ];

  // public doughnutChartData: number[] = [
  //   17,
  //   141,
  //   80,
  //   32,
  //   30
  // ];

  // public doughnutChartType: string = 'doughnut';

  // Chart Click Events
  public chartClicked(event: any):void {
    console.log(event);
  }

  public chartHovered(event: any):void {
    console.log(event)
  }

}

