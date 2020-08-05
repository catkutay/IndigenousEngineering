import {Injectable} from "@angular/core";
import {EngineService} from "../services/engine.service";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {EngineActions} from "../actions/engine.actions";
import {Pin} from "../models/pin.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class EngineEffects {
  constructor(
    private actions$: Actions,
    private db: EngineService,
    private engineActions: EngineActions
  ) { }

  @Effect() addPin = this.actions$
    .ofType(EngineActions.ADD_PIN)
    .map(toPayload)
    .mergeMap((pin: Pin) => this.db.add(pin));

  allPins$ = this.db.getAllPins()
    .map((pins: Pin[]) => { console.log(pins); return this.engineActions.loadPinsSuccess(pins) });

  @Effect() getPins$ = Observable.concat(this.allPins$)
}
