import { Component, OnInit } from '@angular/core';
import { COVIDRepositoryService } from 'src/app/APIServices/covidrepository-service.service';
import { Continent } from 'src/app/Models/continent';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-continents-table',
  templateUrl: './continents-table.component.html',
  styleUrls: ['./continents-table.component.css'],
})
export class ContinentsTableComponent implements OnInit {
  continents: Continent[];

  constructor(
    private service: COVIDRepositoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getContinentsInfo().subscribe((continents) => {
      console.log(continents);
      this.continents = continents;
      console.log('VARIABLE CONTINENTES: ', this.continents);
    });
  }

  onSelect(continent: Continent): void {
    console.log('Selected continent: ', continent.continent);
    this.router.navigate(['/continents/', continent.continent ])
    console.log("APA_: ", this.router.getCurrentNavigation())
  }
}
