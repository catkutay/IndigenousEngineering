import {Action, ActionReducer} from "@ngrx/store";
import {LocationActions} from "../actions/location.actions";
import {Geoposition} from "@ionic-native/geolocation";

export const LocationReducers: ActionReducer<Geoposition> = (state: any = [], action: Action) => {
  switch(action.type) {
    case LocationActions.UPDATE_LOCATION:
      return state.map((location: Geoposition) => location = action.payload)
    case LocationActions.GET_LOCATION:
      return state
    default:
      return state
  }
}
