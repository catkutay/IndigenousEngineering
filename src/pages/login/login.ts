import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IonicPage, NavController } from 'ionic-angular';

import { UserData } from '../../services/user-data';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.navCtrl.push('TabsPage');
    }
  }

  onSignup() {
    this.navCtrl.push('SignupPage');
  }
}
