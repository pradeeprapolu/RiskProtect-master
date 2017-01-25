import { Component } from '@angular/core';

import { NavController, App, Events } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(_app: App, public navCtrl: NavController,public events: Events) {

      events.publish('navBarTitle:changed', 'About');
    }

}
