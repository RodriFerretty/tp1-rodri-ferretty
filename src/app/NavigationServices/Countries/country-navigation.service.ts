import { Injectable } from '@angular/core';
import { Country } from 'src/app/Models/Country/country';

@Injectable({
  providedIn: 'root'
})
export class CountryNavigationService {
  selectedCountry: Country

  constructor() { }

  setCountry(countryToSet: Country) {
    this.selectedCountry = countryToSet
  }

  getCountry(): Country {
    return this.selectedCountry
  }

  cleanNavigationCountry() {
    this.selectedCountry = null
  }
}
