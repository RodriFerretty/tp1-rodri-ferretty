import { Injectable } from '@angular/core';
import { Continent } from 'src/app/Models/Continent/continent';

@Injectable({
  providedIn: 'root'
})
export class ContinentNavigationService {
  selectedContinent: Continent

  constructor() { }

  setContinent(continentToSet: Continent) {
    this.selectedContinent = continentToSet
  }

  getContinent(): Continent {
    return this.selectedContinent
  }

  cleanNavigationContinent() {
    this.selectedContinent = null
  }
}
