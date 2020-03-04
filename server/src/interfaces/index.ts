import { Document } from "mongoose";

export interface IItem extends Document {
  name: string;
  description: string;
  price: number;
  state: "active" | "sold" | "removed";
  owner_id: IUser['_id'];
}

export interface IUser extends Document {
  username: string;
  password: string;
}

export interface UserWithoutPassword extends Document {
  username: string
}