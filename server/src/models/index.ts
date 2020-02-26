import { Schema } from "mongoose";
import * as mongoose from 'mongoose';
import { IItem, IUser } from "../interfaces";

const ItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }
})
export const Item = mongoose.model<IItem>('Item', ItemSchema);

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, },
  password: { type: String, required: true },
})

export const User = mongoose.model<IUser>('User', UserSchema);
