import { Action, ActionReducer } from "@ngrx/store"
import { EngineActions } from "../actions/engine.actions"
import { Pin } from "../models/pin.model"

export const EngineReducers: ActionReducer<Pin[]> = (state: Pin[] = [], action: Action) => {
  switch(action.type) {
    case EngineActions.ADD_UPDATE_PIN_SUCCESS:
      return [...state, Object.assign({}, action.payload)]
    case EngineActions.LOAD_PINS_SUCCESS:
      return action.payload
  }
}
