import {Injectable} from "@angular/core";
import {Platform} from "ionic-angular";
import {Geoposition} from "@ionic-native/geolocation";

@Injectable()
export class LocationService {
  private location: Geoposition

  constructor ( private platform: Platform ) {}


}
