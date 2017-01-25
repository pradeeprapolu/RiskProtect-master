import { Component } from '@angular/core';
import { App, NavController, Events } from 'ionic-angular';
import { CoverageInfoPage } from '../coverage-info/coverage-info';


@Component({

    selector: 'page-driver-details',
    templateUrl: 'driver-details.html'
})

export class DriverDetailsPage {

    driverDOB: String = new Date().toISOString();
    driverLicDate: String = new Date().toISOString();

    constructor(_app: App, public navCtrl: NavController, public events: Events) {

        events.publish('navBarTitle:changed', 'Driver Details');
    }

    openCoverageInfoPage() {
        console.log("Opening coverage info page");
        this.navCtrl.push(CoverageInfoPage);
        // this.navCtrl.setRoot(BasicInfo);
    }

    addNewDriverPage() {
        console.log("Opening additional driver page");
        this.navCtrl.push(DriverDetailsPage);
        // this.navCtrl.setRoot(BasicInfo);
    }


}
