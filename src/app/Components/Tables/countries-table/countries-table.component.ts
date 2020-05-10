import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Models/Country/country';
import { COVIDRepositoryService } from 'src/app/APIServices/covidrepository-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})
export class CountriesTableComponent implements OnInit {
  countries: Country[]
  
  constructor(
    private service: COVIDRepositoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getCountriesInfo().subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
      console.log('VARIABLE COUNTRIES: ', this.countries);
    });
  }

  onSelect(country: Country): void {
    console.log('Selected country: ', country.country);
    this.router.navigate(['/countries/', country.country ])
    console.log("APA_: ", this.router.getCurrentNavigation())
  }

}
