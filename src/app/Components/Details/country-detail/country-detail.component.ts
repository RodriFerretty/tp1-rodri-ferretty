import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COVIDRepositoryService } from 'src/app/APIServices/covidrepository-service.service';
import { CountryNavigationService } from 'src/app/NavigationServices/Countries/country-navigation.service';
import { Country } from 'src/app/Models/Country/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  selectedCountry: Country

  constructor(
    private service: COVIDRepositoryService,
    private route: ActivatedRoute,
    private navService: CountryNavigationService) {
  }

  
  ngOnInit(): void {
    this.getAndSetCountryOnInit()
  }

  getAndSetCountryOnInit() {
    var countryFromNav = this.navService.getCountry()
    // console.log("CONTINENT FROM NAV: ", countryFromNav)
    if (countryFromNav != null) {
      this.navService.cleanNavigationCountry()
      this.selectedCountry = countryFromNav
    } else {
      this.getCountryFromApi()
    }
  }

  getCountryFromApi() {
    this.route.params.subscribe( params => {
      this.service.getCountry(params['country']).subscribe((country) =>{
        // console.log("RESPUESTA PAIS: ", country)
        this.selectedCountry = country
      })
    })
  }

}
