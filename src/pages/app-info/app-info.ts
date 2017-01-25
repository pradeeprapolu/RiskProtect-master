import {Component} from '@angular/core';
import {App, NavController,Events } from 'ionic-angular';
import { IncidentInfoPage } from '../incident-info/incident-info';

@Component({
    selector: 'app-info',
    templateUrl: './app-info.html'

})

export class AppInfoPage {


    appDOB: String = new Date().toISOString();

    coAppCheckBox = {label: 'Co-Applicant Information', state: false};
    
    coAppInfoState(): boolean {
      console.log(this.coAppCheckBox.state);
      return !this.coAppCheckBox.state;
    }

    constructor(_app: App, public navCtrl: NavController,public events: Events) {

      events.publish('navBarTitle:changed', 'Applicant Information');
    }

    openIncidentInfoPage() {
        console.log("Opening policy summary page");
        this.navCtrl.push(IncidentInfoPage);
        // this.navCtrl.setRoot(BasicInfo);
    }

    onSubmit(form){
        console.log(form);
    }
}
  
 /* name: FormControl;
 username: FormControl;
 email: FormControl;
 
 form: FormGroup;
 
 constructor(private builder: FormBuilder) {
 
   this.name = new FormControl('', Validators.required);
   this.email = new FormControl('', Validators.required);
   this.username = new FormControl('', Validators.required);
 
   this.form = builder.group({
     name: this.name,
     email: this.email,
     username: this.username
   });  
 }  */

  /*  complexForm : FormGroup;

  constructor(fb: FormBuilder){

    this.complexForm = fb.group({
    'firstName' : '',
      'lastName': '',
      'gender' : 'Female',
      'hiking' : false,
      'running' : false,
      'swimming' : false
    })
  }

  submitForm(value: any){
    console.log(value);
  }   

userForm: any;
  
  constructor(private formBuilder: FormBuilder) {
      
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'profile': ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }*/
