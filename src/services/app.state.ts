import {Pin} from "../models/pin.model";
import {Geoposition} from "@ionic-native/geolocation";

export interface AppState {
  pins: Pin[]
  location: Geoposition
}
