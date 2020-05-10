import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinentsPageComponent } from './Components/Pages/continents-page/continents-page.component';
import { CountriesPageComponent } from './Components/Pages/countries-page/countries-page.component';
import { ContinentsTableComponent } from './Components/Tables/continents-table/continents-table.component';
import { ContinentDetailComponent } from './Components/Details/continent-detail/continent-detail.component';
import { CountriesTableComponent } from './Components/Tables/countries-table/countries-table.component';
import { CountryDetailComponent } from './Components/Details/country-detail/country-detail.component';


const routes: Routes = [
  {
    path: 'continents',
    component: ContinentsPageComponent,
    children: [
      {
        path: '',
        component: ContinentsTableComponent
      },
      {
        path: ':continente',
        component: ContinentDetailComponent
      }
    ]
},
{
    path: 'countries',
    component: CountriesPageComponent,
    children: [
      {
        path: '',
        component: CountriesTableComponent
      },
      {
        path: ':country',
        component: CountryDetailComponent
      }
    ]
},
{
    path: '',
    redirectTo: '/continents',
    pathMatch: 'full'
},
{
    path: '**',
    redirectTo: '/continents',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
