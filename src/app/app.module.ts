import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { IonicStorageModule } from '@ionic/storage';

import { IndigenousEngineeringApp } from './app.component';

import { ConferenceData } from '../services/conference-data';
import { UserData } from '../services/user-data';
import {StoreModule} from "@ngrx/store";
import {EngineReducers} from "../reducers/engine.reducers";
import {EngineActions} from "../actions/engine.actions";
import {EngineService} from "../services/engine.service";
import {EffectsModule} from "@ngrx/effects";
import {EngineEffects} from "../effects/engine.effects";
import {LocationReducers} from "../reducers/location.reducers";
import {LocationActions} from "../actions/location.actions";

@NgModule({
  declarations: [
    IndigenousEngineeringApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(IndigenousEngineeringApp, {
      preloadModules: true
    }),
    IonicStorageModule.forRoot(),
    StoreModule.provideStore({ pins: EngineReducers, location: LocationReducers }),
    EffectsModule.run(EngineEffects)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    IndigenousEngineeringApp
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    EngineActions,
    LocationActions,
    EngineService,
    Geolocation
  ]
})
export class AppModule { }
