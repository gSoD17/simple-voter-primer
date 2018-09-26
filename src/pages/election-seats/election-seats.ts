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
  public doughnutChartOptions: any = {
    title: {
      text: '2018',
      fontSize: 15,
      display: true
    }
  }

  public doughnutChartColors: Array<any> = [
    { 
      backgroundColor: [
        '#39944a', 
        '#2d338e',
        '#84c0ac',
        '#b00000',
        '#0069b4',
        '#019cdb',
        '#ed1b34',
        '#fedf09'
      ]
    }
  ]

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

  // Chart Click Events
  public chartClicked(event: any):void {
    console.log(event);
  }

  public chartHovered(event: any):void {
    console.log(event)
  }

}

