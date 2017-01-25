import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BasicInfoPage } from '../pages/basic-info/basic-info';
import { AppInfoPage } from '../pages/app-info/app-info';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ControlMessages } from '../pages/app-info/control-messages.component';
import { ValidationService } from '../pages/app-info/validation.service';

//import { RouterModule } from '@angular/router';

import {LoginPage} from './login-page/login';
import {LocationInfoPage} from '../pages/location-info/location-info';
import {VinDetailsPage} from '../pages/vin-details/vin-details';
import {DriverDetailsPage} from '../pages/driver-details/driver-details';
import {CoverageInfoPage} from '../pages/coverage-info/coverage-info';
import {PolicySummaryPage} from '../pages/policy-summary/policy-summary';
import { QuoteSummaryPage } from '../pages/quote-summary/quote-summary';
import { IncidentInfoPage } from '../pages/incident-info/incident-info';
import { DriversSummaryPage } from '../pages/drivers-summary/drivers-summary';
import { VehiclesSummaryPage } from '../pages/vehicles-summary/vehicles-summary';
// import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BasicInfoPage,
    TabsPage,
    AppInfoPage,
    ControlMessages,
    LoginPage,
    LocationInfoPage,
    VinDetailsPage,
    DriverDetailsPage,
    CoverageInfoPage,
    PolicySummaryPage,
    QuoteSummaryPage,
    IncidentInfoPage,
    DriversSummaryPage,
    VehiclesSummaryPage
  ],
  imports: [
    // RouterModule.forRoot([
    //   {
    //     path: 'appHome',
    //     component: MyApp
    //   }
    // ]),
    IonicModule.forRoot(MyApp),
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BasicInfoPage,
    TabsPage,
    AppInfoPage,
    LoginPage,
    LocationInfoPage,
    VinDetailsPage,
    DriverDetailsPage,
    CoverageInfoPage,
    PolicySummaryPage,
    QuoteSummaryPage,
    IncidentInfoPage,
    DriversSummaryPage,
    VehiclesSummaryPage
  ],
  providers: [ ValidationService ]
})
export class AppModule {

}
