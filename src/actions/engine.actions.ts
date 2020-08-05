import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Pin} from '../models/pin.model'

@Injectable()
export class EngineActions {

  static ADD_PIN = 'ADD_PIN'
  addPin(pin: Pin): Action {
    return {
      type: EngineActions.ADD_PIN,
      payload: pin
    }
  }

  static LOAD_PINS_SUCCESS = 'LOAD_PINS_SUCCESS';
  loadPinsSuccess(pins: Pin[]): Action {
    return {
      type: EngineActions.LOAD_PINS_SUCCESS,
      payload: pins
    }
  }

  static ADD_UPDATE_PIN_SUCCESS = 'ADD_UPDATE_PIN_SUCCESS';
  addUpdatePinSuccess(pin: Pin): Action {
    return {
      type: EngineActions.ADD_UPDATE_PIN_SUCCESS,
      payload: pin
    }
  }

}
