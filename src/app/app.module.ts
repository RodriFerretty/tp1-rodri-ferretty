import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ContinentsTableComponent } from './Components/Tables/continents-table/continents-table.component';
import { CountriesTableComponent } from './Components/Tables/countries-table/countries-table.component';
import { ContinentsCountriesTableComponent } from './Components/Tables/continents-countries-table/continents-countries-table.component';
import { ContinentDetailComponent } from './Components/Details/continent-detail/continent-detail.component';
import { CountryDetailComponent } from './Components/Details/country-detail/country-detail.component';
import { LoginComponent } from './Components/Account/login/login.component';
import { SignUpComponent } from './Components/Account/sign-up/sign-up.component';
import { NavigationBarComponent } from './Components/Navigation/navigation-bar/navigation-bar.component';
import { ContinentsPageComponent } from './Components/Pages/continents-page/continents-page.component';
import { CountriesPageComponent } from './Components/Pages/countries-page/countries-page.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './AccountServices/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ContinentsTableComponent,
    CountriesTableComponent,
    ContinentsCountriesTableComponent,
    ContinentDetailComponent,
    CountryDetailComponent,
    LoginComponent,
    SignUpComponent,
    NavigationBarComponent,
    ContinentsPageComponent,
    CountriesPageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
