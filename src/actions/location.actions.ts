import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";
import {Geoposition} from "@ionic-native/geolocation";

@Injectable()
export class LocationActions {
  static UPDATE_LOCATION = 'UPDATE_LOCATION'
  updateLocation(location: Geoposition): Action {
    return {
      type: LocationActions.UPDATE_LOCATION,
      payload: location
    }
  }

  static GET_LOCATION = 'GET_LOCATION'
  getLocation(location: Geoposition): Action {
    return {
      type: LocationActions.GET_LOCATION,
      payload: location
    }
  }
}
