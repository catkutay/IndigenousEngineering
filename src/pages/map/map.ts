///<reference path="../../../node_modules/@types/googlemaps/index.d.ts"/>
import {Component, ViewChild, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import {Geolocation, Geoposition} from '@ionic-native/geolocation';
import LatLng = google.maps.LatLng;
import {Store} from "@ngrx/store";
import {AppState} from "../../services/app.state";
import {Observable} from "rxjs/Observable";

// declare const google: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  map: any;
  location: Observable<Geoposition>;

  constructor(public platform: Platform, public geolocation: Geolocation, private store: Store<AppState>) {
    this.location = this.store.select(state => state.location)
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position: any) => {

      let mapEl = this.mapElement.nativeElement;

      let latLng: LatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      //Add Marker
      this.addMarker("Current Location");

      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        mapEl.classList.add('show-map');
      });

    }).catch(err => console.log(err));
  }

  addMarker(title: any) {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = `<h4>${title}</h4>`;

    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker: any, content: String){

    let infoWindow = new google.maps.InfoWindow({
      content: `<span>${content}</span>`
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
}
