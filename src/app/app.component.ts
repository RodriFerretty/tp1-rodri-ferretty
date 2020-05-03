import { Component } from '@angular/core';
import { COVIDRepositoryService } from './APIServices/covidrepository-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp1-rodri-ferretty';

  constructor(private service: COVIDRepositoryService) { }

  ngOnInit() {
    this.service.getContinentsInfo().subscribe( continents => {
      console.log(continents)
    })
  }

}
