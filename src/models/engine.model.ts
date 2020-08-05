import {User} from "./user.model";

export interface Engine {
  _id: string
  name: string
  owner: keyof User
}
