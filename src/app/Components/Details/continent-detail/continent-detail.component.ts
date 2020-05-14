import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Continent, ContinentAdapter } from 'src/app/Models/Continent/continent';
import { ContinentNavigationService } from 'src/app/NavigationServices/Continents/continent-navigation.service';
import { COVIDRepositoryService } from 'src/app/APIServices/covidrepository-service.service';

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
    private navService: ContinentNavigationService  
  ) {
  }

  ngOnInit(): void {
    this.getAndSetContinentOnInit()
  }

  getAndSetContinentOnInit() {
    var continentFromNav = this.navService.getContinent()
    console.log("CONTINENT FROM NAV: ", continentFromNav)
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
        console.log("RESPUESTA CONTINENTE: ", continent)
        this.continenteSeleccionado = continent
      })
    })
  }

}
