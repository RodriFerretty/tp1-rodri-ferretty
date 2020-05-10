import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContinentAdapter, Continent } from '../Models/Continent/continent';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryAdapter, Country } from '../Models/Country/country';

@Injectable({
  providedIn: 'root',
})
export class COVIDRepositoryService {
  private url = 'https://disease.sh/v2/';

  constructor(
    protected httpClient: HttpClient,
    protected continentAdapter: ContinentAdapter,
    protected countryAdapter: CountryAdapter
  ) {}

  public getContinentsInfo(): Observable<Continent[]> {
    const endpoint = 'continents';

    return this.httpClient
      .get(`${this.url}${endpoint}`)
      .pipe(
        map((data: any[]) =>
          data.map((item) => this.continentAdapter.adapt(item))
        )
      );
  }

  public getCountriesInfo(): Observable<Country[]> {
    const endpoint = 'countries';

    return this.httpClient
      .get(`${this.url}${endpoint}`)
      .pipe(
        map((data: any[]) =>
          data.map((item) => this.countryAdapter.adapt(item))
        )
      );
  }
}
