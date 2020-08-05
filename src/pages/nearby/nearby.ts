import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';

import { AlertController, App, IonicPage, FabContainer, ItemSliding, List, ModalController, NavController, LoadingController } from 'ionic-angular';

import { ConferenceData } from '../../services/conference-data';
import { UserData } from '../../services/user-data';
import {AppState} from "../../services/app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Pin} from "../../models/pin.model";
import {EngineActions} from "../../actions/engine.actions";

@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NearbyPage {
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  groups: any = [];
  confDate: string;
  pins: Observable<Pin[]>

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public confData: ConferenceData,
    public user: UserData,
    private store: Store<AppState>,
    private engineActions: EngineActions
  ) {
    this.pins = this.store.select(state => state.pins)
  }

  addPin() {
    let pin: any = {
      name: 'Demo pin',
      location: '-90, -90',
      type: 'PIN'
    }
    this.store.dispatch(this.engineActions.addPin(pin))
  }

  presentFilter() {
    let modal = this.modalCtrl.create('ScheduleFilterPage', this.excludeTracks);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
      }
    });

  }

  goToSessionDetail(sessionData: any) {
    // go to the session detail page
    // and pass in the session data
    this.navCtrl.push('SessionDetailPage', sessionData);
  }
}
