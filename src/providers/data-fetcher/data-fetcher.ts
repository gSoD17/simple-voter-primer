import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';

@Injectable()
export class DataFetcherProvider {

  filePath: string = 'assets/data/sweden.json';
  countryGetter = new ReplaySubject<any>();

  constructor(public http: HttpClient) {}

  fetchLocalData() {

    this.http.get<any[]>(this.filePath)
      .subscribe(data => {
        this.countryGetter.next(data)
      });

  }

}
