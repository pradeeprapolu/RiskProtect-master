import { Component } from '@angular/core';
import { App, NavController, Events } from 'ionic-angular';
import { PolicySummaryPage } from '../policy-summary/policy-summary';


@Component({

    selector: 'page-coverage-info',
    templateUrl: 'coverage-info.html'
})

export class CoverageInfoPage {


    additionalCovCheckBoxes = [
      {label: 'Loan/Lease Coverage', state: false},
      {label: 'Limited Mexico', state: false},
      {label: 'Miscellaneous Vehicle Coverage', state: false},
      {label: 'Road Service', state: false},
      {label: 'Rental Car Coverage', state: false},
      {label: 'New car protection against depreciation', state: false},

    ];


    constructor(_app: App, public navCtrl: NavController, public events: Events) {

        events.publish('navBarTitle:changed', 'Coverages');
    }

    openPolicySummary() {
        console.log("Opening policy summary page");
        this.navCtrl.push(PolicySummaryPage);
        // this.navCtrl.setRoot(BasicInfo);
    }


}
