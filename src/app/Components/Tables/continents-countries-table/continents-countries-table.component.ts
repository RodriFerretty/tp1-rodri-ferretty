import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/Models/Country/country';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-continents-countries-table',
  templateUrl: './continents-countries-table.component.html',
  styleUrls: ['./continents-countries-table.component.css']
})
export class ContinentsCountriesTableComponent implements OnInit {
  @Input('countryList') countries: string;
  @Output() countryClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(country: string): void {
    console.log('Selected country in continent-country-table: ', country);
    this.countryClicked.emit(country)
  }

}
