import { Component } from '@angular/core';
import { App, NavController,Events } from 'ionic-angular';
import { DriverDetailsPage } from '../driver-details/driver-details';


@Component({
  
  selector: 'page-vin-details',
  templateUrl: 'vin-details.html'
})

export class VinDetailsPage {
  
  constructor(_app: App, public navCtrl: NavController,public events: Events) {

      events.publish('navBarTitle:changed', 'VIN Details');
    }

  vinUnknownCheckbox = {label: 'VIN Unknown', state: false};
    
    vinUnknownStatus(): boolean {
      console.log(this.vinUnknownCheckbox.state);
      return this.vinUnknownCheckbox.state;
    }

  openDriverDetails(){
    console.log("Opening drivers page");
     this.navCtrl.push(DriverDetailsPage);
    // this.navCtrl.setRoot(BasicInfo);
  }


}
