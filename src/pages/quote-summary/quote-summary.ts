import { Component } from '@angular/core';
import { App, NavController, Events } from 'ionic-angular';
import { PolicySummaryPage } from '../policy-summary/policy-summary';
import { AppInfoPage } from '../app-info/app-info';


import { Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({

    selector: 'page-quote-summary',
    templateUrl: 'quote-summary.html'
})

export class QuoteSummaryPage {


    constructor(_app: App, public navCtrl: NavController, public events: Events) {

        events.publish('navBarTitle:changed', 'Policy Summary');
    }

    openPolicySummaryPage() {
        console.log("Opening policy summary page");
        this.navCtrl.push(PolicySummaryPage);
        // this.navCtrl.setRoot(BasicInfo);
    }

    openApplicantInfoPage() {
        console.log("Opening Applicant Information page");
        this.navCtrl.push(AppInfoPage);
        // this.navCtrl.setRoot(BasicInfo);
    }

    


}
