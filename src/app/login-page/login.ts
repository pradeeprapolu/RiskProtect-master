import {Component} from '@angular/core';
import { NavController,Events } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

//import {App, Events, NavController } from 'ionic-angular';
//import {ViewChild} from '@angular/core';
//import { Platform,MenuController,Nav } from 'ionic-angular';
//import { StatusBar } from 'ionic-native';

// import {MyApp} from '../app.component';


@Component({

    templateUrl: './login.html'
   // styleUrls: ['./login.scss']

})

export class LoginPage {
  

    constructor(public navCtrl: NavController,public events: Events) {

      events.publish('navBarTitle:changed', 'Welcome to CGI Insurance');

  }

  openHomePage(){
    console.log("Opening Home page");
     this.navCtrl.push(HomePage);
    // this.navCtrl.setRoot(BasicInfo);
  }

  // //  @ViewChild(Nav) nav: Nav;
  // rootPage = LoginPage;

  // navTitle : string = "CGI P&C Insurance";

  //   constructor(public platform: Platform, public navCtrl: NavController, public menu: MenuController,public events: Events) {
  //        this.initializeApp();
  //    // events.publish('navBarTitle:changed', 'Welcome to CGI Insurance');
  //   // this.subscribeToNavBarTitleChange();
  // }

  // openAutoBasicInfo(){
  //   console.log("Opening Main page page");
  //    this.navCtrl.push(MyApp);
  //   // this.navCtrl.setRoot(BasicInfo);
  // }

// initializeApp() {
//     this.platform.ready().then(() => {
//       // Okay, so the platform is ready and our plugins are available.
//       // Here you can do any higher level native things you might need.
//       StatusBar.styleDefault();
//     });
    
// }


  // setNavigationBarTitle(myTitle : string){
  //   this.navTitle = myTitle;
  // }
  
  // subscribeToNavBarTitleChange(){
  //   this.events.subscribe('navBarTitle:changed', (userEventData) => {
  //    // userEventData is an array of parameters, so grab our first and only arg
     
  //     console.log('Welcome', userEventData[0]);
  //     this.setNavigationBarTitle(userEventData[0] );
  // });


  // }

}
  