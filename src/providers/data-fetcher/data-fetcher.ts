import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import map from 'rxjs/add/operator/map'

@Injectable()
export class DataFetcherProvider {

  filePath: string = 'assets/data/sweden.json';

  constructor(public http: HttpClient) {}

  fetchLocalData() {
    console.log('function called')
    return this.http.get(this.filePath);
  }

}
