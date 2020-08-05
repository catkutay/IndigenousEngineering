import { NgModule } from '@angular/core';
import { NearbyPage } from './nearby';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    NearbyPage
  ],
  imports: [
    IonicPageModule.forChild(NearbyPage)
  ],
  entryComponents: [
    NearbyPage
  ]
})
export class NearbyPagePageModule {}
