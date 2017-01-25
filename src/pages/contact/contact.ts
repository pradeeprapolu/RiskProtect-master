import { Component } from '@angular/core';

import { NavController, App, Events } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(_app: App, public navCtrl: NavController,public events: Events) {

      events.publish('navBarTitle:changed', 'Contact Us');
    }

}
