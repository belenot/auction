import { Item } from "../types";

/**
 * States
 */

export interface SystemState {
  loggedIn: boolean;
  initialized: boolean;
  userId: string;
  username: string;
  wallet: number;
  items: Item[];
  page: 'ADD_ITEM' | 'ITEMS_LIST' | 'PROFILE';
}

export interface SigninState {
  username: string;
  password: string;
  requestSignin: boolean;
  error: string;
}

export interface SignupState {
  username: string;
  password: string;
  requestSignup: boolean;
  error: string;
}

export interface LoginState {
  page: "signin" | "signup"
}

export interface ItemsListState {
  items: Item[]
}