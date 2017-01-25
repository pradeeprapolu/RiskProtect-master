import { Component } from '@angular/core';
import { App, NavController, Events } from 'ionic-angular';
import { PolicySummaryPage } from '../policy-summary/policy-summary';
import { AppInfoPage } from '../app-info/app-info';


import { Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({

    selector: 'page-drivers-summary',
    templateUrl: 'drivers-summary.html'
})

export class DriversSummaryPage {


    constructor(_app: App, public navCtrl: NavController, public events: Events) {

        events.publish('navBarTitle:changed', 'Driver(s) Summary');
    }

    openPolicySummaryPage() {
        console.log("Opening policy summary page");
        this.navCtrl.push(PolicySummaryPage);
        // this.navCtrl.setRoot(BasicInfo);
    }

    


}
