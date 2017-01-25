import { Component } from '@angular/core';
import {App, NavController,Events } from 'ionic-angular';
import { LocationInfoPage } from '../location-info/location-info';
/*
  Generated class for the BasicInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-basic-info',
  templateUrl: './basic-info.html'
})
export class BasicInfoPage {

  constructor(_app: App, public navCtrl: NavController,public events: Events) {
    //setNavigationBarTitle("Basic Info");
    events.publish('navBarTitle:changed', 'Basic Info');
  }

  ionViewDidLoad() {
    console.log('Hello BasicInfo Page');
  }

  openLocationInfoPage(){
    console.log("Opening location info page");
     this.navCtrl.push(LocationInfoPage);
    // this.navCtrl.setRoot(BasicInfo);
  }

}
