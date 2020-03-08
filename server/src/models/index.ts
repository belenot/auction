import { Schema } from "mongoose";
import * as mongoose from 'mongoose';
import { IItem, IUser, IProfile } from "../interfaces";

const ItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  state: { type: String, required: true, default: 'active' },
  image: { type: String },
  owner_id: { type: String, required: true }
})
export const Item = mongoose.model<IItem>('Item', ItemSchema);

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, },
  password: { type: String, required: true },
  profile_id: { type: String }
})

export const User = mongoose.model<IUser>('User', UserSchema);

const ProfileSchema = new Schema({
  wallet: { type: Number, required: true, default: 0 },
  items: {
    own: { type: Array, required: true, default: [] },
    betted: { type: Array, required: true, default: [] },
    bought: { type: Array, required: true, default: [] }
  }
})

export const Profile = mongoose.model<IProfile>('Profile', ProfileSchema);