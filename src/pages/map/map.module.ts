import { NgModule } from '@angular/core';
import { MapPage } from './map';
import { IonicPageModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
	declarations: [
		MapPage
	],
	imports: [
		IonicPageModule.forChild(MapPage)
	],
	entryComponents: [
		MapPage
	],
  providers: [
    Geolocation
  ]
})
export class MapPageModule {}
