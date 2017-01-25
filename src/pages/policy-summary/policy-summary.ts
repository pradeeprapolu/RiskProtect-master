import { Component } from '@angular/core';
import { App, NavController, Events } from 'ionic-angular';
import { QuoteSummaryPage } from '../quote-summary/quote-summary';

import { IncidentInfoPage } from '../incident-info/incident-info';
import { AppInfoPage } from '../app-info/app-info';
import { CoverageInfoPage } from '../coverage-info/coverage-info';
import { DriversSummaryPage } from '../drivers-summary/drivers-summary';
import { VehiclesSummaryPage } from '../vehicles-summary/vehicles-summary';


import { Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({

    selector: 'page-policy-summary',
    templateUrl: 'policy-summary.html'
})

export class PolicySummaryPage {


    constructor(_app: App, public navCtrl: NavController, public events: Events) {

        events.publish('navBarTitle:changed', 'Policy Summary');
    }

    openQuoteSummary() {
        console.log("Opening quote summary page");
        this.navCtrl.push(QuoteSummaryPage);
        // this.navCtrl.setRoot(BasicInfo);
    }

    openIncidentInfo() {
        console.log("Opening incident information page");
        this.navCtrl.push(IncidentInfoPage);
        // this.navCtrl.setRoot(BasicInfo);
    }

    openApplicantInfo() {
        console.log("Opening applicant information page");
        this.navCtrl.push(AppInfoPage);
        // this.navCtrl.setRoot(BasicInfo);
    }

    openCoverageSummary() {
        console.log("Opening coverage information page");
        this.navCtrl.push(CoverageInfoPage);
        // this.navCtrl.setRoot(BasicInfo);
    }

    openDriversSummary() {
        console.log("Opening coverage information page");
        this.navCtrl.push(DriversSummaryPage);
    }

openVehiclesSummary() {
        console.log("Opening coverage information page");
        this.navCtrl.push(VehiclesSummaryPage);
    }





}
