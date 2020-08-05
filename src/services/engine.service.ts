import { Injectable } from '@angular/core'
import { Platform } from 'ionic-angular'
import { Observable } from 'rxjs/Observable'
import { Observer } from "rxjs/Observer";

import * as PouchDB from 'pouchdb'
import {Pin} from "../models/pin.model";

@Injectable()
export class EngineService {
  private db: any

  constructor ( private platform: Platform ) {}

  initDB(): Promise<any> {
    return this.platform.ready()
      .then(() => {
        this.db = new PouchDB('engine', { adapter: 'websql' })
      })
  }

  add(pin: Pin): Promise<any> {
    return this.db.post(pin)
  }

  getAllPins() : Observable<Pin[]> {
    return Observable.fromPromise(
      this.initDB()
        .then(() => {
          return this.db.allDocs({ include_docs: true });
        })
        .then(docs => {
          console.log(docs)

          // Each row has a .doc object and we just want to send an
          // array of engine objects back to the calling code,
          // so let's map the array to contain just the .doc objects.

          return docs.rows.map((row: any) => {
            console.log(row.doc)
            return row.doc;
          });
        })
    );
  }

  getPinChanges(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {

      // Listen for changes on the database.
      this.db.changes({ live: true, since: 'now', include_docs: true })
        .on('change', (change: any) => {
          // Convert string to date, doesn't happen automatically.
          change.doc.Date = new Date(change.doc.Date);
          observer.next(change.doc);
        });
    });
  }
}
