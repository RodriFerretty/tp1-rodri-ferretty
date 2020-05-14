import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Continent, ContinentAdapter } from 'src/app/Models/Continent/continent';
import { ContinentNavigationService } from 'src/app/NavigationServices/Continents/continent-navigation.service';
import { COVIDRepositoryService } from 'src/app/APIServices/covidrepository-service.service';
import { Country } from 'src/app/Models/Country/country';
import { CountryNavigationService } from 'src/app/NavigationServices/Countries/country-navigation.service';

@Component({
  selector: 'app-continent-detail',
  templateUrl: './continent-detail.component.html',
  styleUrls: ['./continent-detail.component.css']
})
export class ContinentDetailComponent implements OnInit {

  continenteSeleccionado: Continent

  constructor(
    private service: COVIDRepositoryService,
    private route: ActivatedRoute,
    private router: Router,
    private navService: ContinentNavigationService,
    private countryNavService: CountryNavigationService 
  ) {
  }

  ngOnInit(): void {
    this.getAndSetContinentOnInit()
  }

  getAndSetContinentOnInit() {
    var continentFromNav = this.navService.getContinent()
    // console.log("CONTINENT FROM NAV: ", continentFromNav)
    if (continentFromNav != null) {
      this.navService.cleanNavigationContinent()
      this.continenteSeleccionado = continentFromNav
    } else {
      this.getContinentFromApi()
    }
  }

  getContinentFromApi() {
    this.route.params.subscribe( params => {
      this.service.getContinent(params['continent']).subscribe((continent) =>{
        // console.log("RESPUESTA CONTINENTE: ", continent)
        this.continenteSeleccionado = continent
      })
    })
  }

  onSelectedCountry(countrySelected: string) {
    // console.log("PAIS SELECCIONADO: ", countrySelected)
    this.router.navigate(['/countries/', countrySelected])
  }

}
