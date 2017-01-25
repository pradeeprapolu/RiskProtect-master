import { Component } from '@angular/core';
import { App, NavController, Events } from 'ionic-angular';
import { PolicySummaryPage } from '../policy-summary/policy-summary';
import { AppInfoPage } from '../app-info/app-info';


import { Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({

    selector: 'page-vehicles-summary',
    templateUrl: 'vehicles-summary.html'
})

export class VehiclesSummaryPage {


    constructor(_app: App, public navCtrl: NavController, public events: Events) {

        events.publish('navBarTitle:changed', 'Vehicle Summary');
    }

    

    


}
