import { Injectable } from '@angular/core';
import { Adapter } from '../Core/Adapters/adapter';

export class Continent {
  constructor(
    public updated: number,
    public cases: number,
    public todayCases: number,
    public deaths: number,
    public todayDeaths: number,
    public recovered: number,
    public active: number,
    public critical: number,
    public continent: string,
    public countries: string[]
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ContinentAdapter implements Adapter<Continent> {
  adapt(item: any): Continent {
    var continent = new Continent(
      item.updated,
      item.cases,
      item.todayCases,
      item.deaths,
      item.todayDeaths,
      item.recovered,
      item.active,
      item.critical,
      item.continent,
      item.countries
    );
    return continent
  }
}
