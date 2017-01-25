import { Component } from '@angular/core';
import { NavController,Events } from 'ionic-angular';
import { BasicInfoPage } from '../basic-info/basic-info';


@Component({
  
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,public events: Events) {

  events.publish('navBarTitle:changed', 'CGI P&C Insurance');

  }

  openAutoBasicInfo(){
    console.log("Opening auto basic info page");
     this.navCtrl.push(BasicInfoPage);
    // this.navCtrl.setRoot(BasicInfo);
  }
  openHomeBasicInfo(){
    console.log("Opening home basic info page");
     this.navCtrl.push(BasicInfoPage);
    // this.navCtrl.setRoot(BasicInfo);
  }


}
