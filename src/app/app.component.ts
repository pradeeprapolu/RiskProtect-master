import { Component,ViewChild } from '@angular/core';
import { Platform,MenuController,Nav,Events } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import {AppInfoPage} from '../pages/app-info/app-info';
import {BasicInfoPage} from '../pages/basic-info/basic-info';
import {LoginPage} from './login-page/login';
import {LocationInfoPage} from '../pages/location-info/location-info';
import {VinDetailsPage} from '../pages/vin-details/vin-details';
import {DriverDetailsPage} from '../pages/driver-details/driver-details';
import {CoverageInfoPage} from '../pages/coverage-info/coverage-info';
import {PolicySummaryPage} from '../pages/policy-summary/policy-summary';
import {QuoteSummaryPage} from '../pages/quote-summary/quote-summary';
import { IncidentInfoPage } from '../pages/incident-info/incident-info';
import { DriversSummaryPage } from '../pages/drivers-summary/drivers-summary';
import { VehiclesSummaryPage } from '../pages/vehicles-summary/vehicles-summary';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = LoginPage;
  pages: Array<{title: string, component: any}>;
  navTitle : string = "CGI P&C Insurance";
  constructor(public platform: Platform, public menu: MenuController,public events: Events) {
     this.initializeApp();
      // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Contact Page', component: ContactPage },
      { title: 'About', component: AboutPage },
      { title: 'Basic Info', component: BasicInfoPage },
      { title: 'Applicant Information Page', component: AppInfoPage },
      { title: 'Login Page', component: LoginPage },
      { title: 'Location Info', component: LocationInfoPage },
      { title: 'VIN Details', component: VinDetailsPage },
      { title: 'Driver Details', component: DriverDetailsPage},
      { title: 'Coverages', component: CoverageInfoPage},
      { title: 'Policy Summary', component: PolicySummaryPage},
      { title:'Quote Summary', component: QuoteSummaryPage},
      { title:'Incidents Information', component: IncidentInfoPage},
      { title:'Driver(s) Summary', component: DriversSummaryPage},
      { title:'Vehicle Summary', component: VehiclesSummaryPage},
    ];

    
    this.subscribeToNavBarTitleChange();
  }




 initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
    
}

 openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

 setNavigationBarTitle(myTitle : string){
    this.navTitle = myTitle;
  }
  
  subscribeToNavBarTitleChange(){
    this.events.subscribe('navBarTitle:changed', (userEventData) => {
     // userEventData is an array of parameters, so grab our first and only arg
     
      console.log('Welcome', userEventData[0]);
      this.setNavigationBarTitle(userEventData[0] );
  }); 


  }

}
