import { Document } from "mongoose";

export interface IItem extends Document {
  name: string;
  description: string;
  price: number;
  state: "active" | "sold" | "removed";
  image: string
  owner_id: IUser['_id'];
}

export interface IUser extends Document {
  username: string;
  password: string;
  profile_id: IProfile['_id']
}

export interface UserWithoutPassword extends Document {
  username: string
}

export interface IProfile extends Document {
  wallet: number;
  items: IItem[];
}