import {Engine} from "./engine.model";
import Point = google.maps.Point;
import {EngineType} from "./engine-type.model";
import {User} from "./user.model";

export interface Pin {
  _id: string
  _rev: string
  name: string
  // owner: keyof User
  location: string
  type: string
}
