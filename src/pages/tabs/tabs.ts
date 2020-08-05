import { Component } from '@angular/core';

import { IonicPage, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: string = 'NearbyPage';
  tab2Root: string = 'CategoriesPage';
  tab3Root: string = 'MapPage';
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
