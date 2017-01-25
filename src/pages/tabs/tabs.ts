import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { AppInfoPage } from '../app-info/app-info';
import { BasicInfoPage } from '../basic-info/basic-info';
import { LoginPage } from '../../app/login-page/login';
import { LocationInfoPage } from '../location-info/location-info';
import { VinDetailsPage } from '../vin-details/vin-details';
import { DriverDetailsPage } from '../driver-details/driver-details';
import { CoverageInfoPage } from '../coverage-info/coverage-info';
import { PolicySummaryPage } from '../policy-summary/policy-summary';
import { QuoteSummaryPage } from '../quote-summary/quote-summary';
import { IncidentInfoPage } from '../incident-info/incident-info';
import { DriversSummaryPage } from '../drivers-summary/drivers-summary';
import { VehiclesSummaryPage } from '../vehicles-summary/vehicles-summary';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = AppInfoPage;
  tab5Root: any = BasicInfoPage;
  tab6Root: any = LoginPage;
  tab7Root: any = LocationInfoPage;
  tab8Root: any = VinDetailsPage;
  tab9Root: any = DriverDetailsPage;
  tab10Root: any = CoverageInfoPage;
  tab11Root: any = PolicySummaryPage;
  tab12Root: any = QuoteSummaryPage;
  tab13Root: any = IncidentInfoPage;
  tab14Root: any = DriversSummaryPage;
  tab15Root: any = VehiclesSummaryPage;

  constructor() {

  }
}
