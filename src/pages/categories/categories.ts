import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';

import { AlertController, App, IonicPage, FabContainer, ItemSliding, List, ModalController, NavController, LoadingController } from 'ionic-angular';

import { ConferenceData } from '../../services/conference-data';
import { UserData } from '../../services/user-data';
import {AppState} from "../../services/app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Pin} from "../../models/pin.model";

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})

export class CategoriesPage {

}




