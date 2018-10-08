import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';

@Injectable()
export class DataFetcherProvider {

  filePathCountryData: string = 'assets/data/sweden.json';
  filePathQuizData: string = 'assets/data/quiz.json';

  countryGetter = new ReplaySubject<any>();

  constructor(public http: HttpClient) {}

  fetchLocalData() {

    this.http.get<any[]>(this.filePathCountryData)
      .subscribe(data => this.countryGetter.next(data));

  }

  fetchQuizData() {

    return this.http.get(this.filePathQuizData)

  }

}
