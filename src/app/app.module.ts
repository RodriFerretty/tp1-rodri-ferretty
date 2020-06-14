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
import { MainSessionComponent } from "./Components/Account/main-session/main-session.component";
import { NavigationBarComponent } from './Components/Navigation/navigation-bar/navigation-bar.component';
import { ContinentsPageComponent } from './Components/Pages/continents-page/continents-page.component';
import { CountriesPageComponent } from './Components/Pages/countries-page/countries-page.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './AccountServices/auth.service';
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";
import { LoginTabComponent } from './Components/Account/tabComponents/login-tab/login-tab.component';
import { SignUpTabComponent } from './Components/Account/tabComponents/sign-up-tab/sign-up-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ContinentsTableComponent,
    CountriesTableComponent,
    ContinentsCountriesTableComponent,
    ContinentDetailComponent,
    CountryDetailComponent,
    MainSessionComponent,
    NavigationBarComponent,
    ContinentsPageComponent,
    CountriesPageComponent,
    LoginTabComponent,
    SignUpTabComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
