import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Models/Country/country';
import { COVIDRepositoryService } from 'src/app/APIServices/covidrepository-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryNavigationService } from 'src/app/NavigationServices/Countries/country-navigation.service';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})
export class CountriesTableComponent implements OnInit {
  originalCountries: Country[]
  countries: Country[]
  
  constructor(
    private service: COVIDRepositoryService,
    private router: Router,
    private navService: CountryNavigationService
  ) { }

  ngOnInit(): void {
    this.service.getCountriesInfo().subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
      this.originalCountries = countries;
      console.log('VARIABLE COUNTRIES: ', this.countries);
    });
  }

  onSelect(country: Country): void {
    console.log('Selected country: ', country.country);
    this.navService.setCountry(country)
    this.router.navigate(['/countries/', country.country ])
  }

  onSearchChange(word: string){
   this.countries = this.originalCountries.filter(country => country.country.toLowerCase().includes(word))
  }

}
