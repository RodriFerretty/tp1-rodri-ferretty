import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/Core/Adapters/adapter';

export class Country {
  constructor(
    public updated: number,
    public country: string,
    public countryInfo: CountryInfo,
    public cases: number,
    public todayCases: number,
    public deaths: number,
    public todayDeaths: number,
    public recovered: number,
    public active: number,
    public critical: number,
    public casesPerOneMillion: number,
    public deathsPerOneMillion: number,
    public tests: number,
    public testsPerOneMillion: number,
    public continent: string
  ) {}
}
@Injectable({
  providedIn: 'root',
})
export class CountryAdapter implements Adapter<Country> {
  adapt(item: any): Country {
    var countryInfoInstance = new CountryInfo(item.countryInfo);
    var country = new Country(
      item.updated,
      item.country,
      item.countryInfo,
      item.cases,
      item.todayCases,
      item.deaths,
      item.todayDeaths,
      item.recovered,
      item.active,
      item.critical,
      item.casesPerOneMillion,
      item.deathsPerOneMillion,
      item.tests,
      item.testsPerOneMillion,
      item.continent
    );
    return country;
  }
}

export class CountryInfo {
  public _id: number;
  public iso2: string;
  public iso3: string;
  public lat: number;
  public long: number;
  public flag: string;

  constructor(item: any) {
    this._id = item._id;
    this.iso2 = item.iso2;
    this.iso3 = item.iso3;
    this.lat = item.lat;
    this.long = item.long;
    this.flag = item.flag;
  }
}
