import { Component } from '@angular/core';
import { App, NavController,Events } from 'ionic-angular';
import { VinDetailsPage } from '../vin-details/vin-details';


@Component({
  
  selector: 'page-location-info',
  templateUrl: 'location-info.html'
})

export class LocationInfoPage {

  polEffDate: Date;
  
  constructor(_app: App, public navCtrl: NavController,public events: Events) {

      events.publish('navBarTitle:changed', 'Basic Info');
    }

  
  openVehicleInfo(){
    console.log("Opening vehicle information page");
     this.navCtrl.push(VinDetailsPage);
    // this.navCtrl.setRoot(BasicInfo);
  }


}
