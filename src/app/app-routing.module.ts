import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinentsPageComponent } from './Components/Pages/continents-page/continents-page.component';
import { CountriesPageComponent } from './Components/Pages/countries-page/countries-page.component';
import { ContinentsTableComponent } from './Components/Tables/continents-table/continents-table.component';
import { ContinentDetailComponent } from './Components/Details/continent-detail/continent-detail.component';
import { CountriesTableComponent } from './Components/Tables/countries-table/countries-table.component';
import { CountryDetailComponent } from './Components/Details/country-detail/country-detail.component';
import { LoginComponent } from './Components/Account/login/login.component';
import { SignUpComponent } from './Components/Account/sign-up/sign-up.component';
import { AuthGuard } from './AccountServices/Guard/auth.guard';
import { SecureLoggedInPagesGuard } from './AccountServices/Guard/secure-logged-in-pages.guard';


const routes: Routes = [
  {
    path: 'continents',
    component: ContinentsPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ContinentsTableComponent
      },
      {
        path: ':continent',
        component: ContinentDetailComponent
      }
    ]
},
{
    path: 'countries',
    component: CountriesPageComponent,
    canActivate: [AuthGuard],
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
  path: 'login',
  component: LoginComponent,
  canActivate: [SecureLoggedInPagesGuard]
},
{
  path: 'signup',
  component: SignUpComponent,
  canActivate: [SecureLoggedInPagesGuard]
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
