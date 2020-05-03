import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContinentAdapter, Continent } from '../Models/continent';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class COVIDRepositoryService {
  private url = 'https://disease.sh/v2/';

  constructor(
    protected httpClient: HttpClient,
    protected continentAdapter: ContinentAdapter
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
}
