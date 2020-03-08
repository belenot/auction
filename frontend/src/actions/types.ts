import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../reducers";
import { LoginState, SystemState, AddItemState } from "../reducers/types";
import { Item, Profile } from "../types";
import { Action } from "redux";

export const HANDLE_SIGNIN = 'HANDLE_SIGNIN';
export const HANDLE_SIGNUP = 'HANDLE_SIGNUP';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const LOGIN_SWITCH = 'LOGIN_SWITCH';
export const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';
export const INITIALIZE_FAILURE = 'INITIALIZE_FAILURE';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE'
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const HANDLE_ADD_ITEM = 'HANDLE_ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNOUT_FAILURE = 'SIGNOUT_FAILURE';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';
export const HANDLE_CHANGE_WALLET = 'HANDLE_CHANGE_WALLET';
export const CHANGE_WALLET_SUCCESS = 'CHANGE_WALLET_SUCCESS'
export const CHANGE_WALLET_FAILURE = 'CHANGE_WALLET_FAILURE'

export interface HandleSigninAction {
  type: typeof HANDLE_SIGNIN;
  payload: {
    username: string;
    password: string;
  }
}

export interface HandleSignupAction {
  type: typeof HANDLE_SIGNUP;
  payload: {
    username: string;
    password: string;
  }
}

export interface SigninSuccess {
  type: typeof SIGNIN_SUCCESS,
  payload: {
    id: string;
    username: string;
  }
}

export interface SigninFailure {
  type: typeof SIGNIN_FAILURE;
  payload: {
    error: string;
  }
}

export interface SigninRequest {
  type: typeof SIGNIN_REQUEST;
}

export interface SignupSuccess {
  type: typeof SIGNUP_SUCCESS;
}

export interface SignupFailure {
  type: typeof SIGNUP_FAILURE;
  payload: {
    error: string;
  }
}

export interface SignupRequest {
  type: typeof SIGNUP_REQUEST;
}

export interface LoginSwitch {
  type: typeof LOGIN_SWITCH;
  payload: {
    page: LoginState['page']
  }
}

export interface InitializeSuccess {
  type: typeof INITIALIZE_SUCCESS;
}

export interface InitializeFailure {
  type: typeof INITIALIZE_FAILURE;
}

export interface HandleAddItem {
  type: typeof HANDLE_ADD_ITEM
  payload: {
    state: AddItemState
  }
}

export interface GetItemsSuccess {
  type: typeof GET_ITEMS_SUCCESS;
  payload: {
    items: Item[]
  }
}

export interface GetItemsFailure {
  type: typeof GET_ITEMS_FAILURE;
  payload: {
    error: string;
  }
}

export interface ChangePage {
  type: typeof CHANGE_PAGE;
  payload: {
    page: SystemState['page'];
  }
}

export interface AddItemSuccess {
  type: typeof ADD_ITEM_SUCCESS;
  payload: {
    item: Item;
  }
}

export interface AddItemFailure {
  type: typeof ADD_ITEM_FAILURE;
  payload: {
    error: string;
  }
}

export interface SignoutSuccess {
  type: typeof SIGNOUT_SUCCESS
}

export interface SignoutFailure {
  type: typeof SIGNOUT_FAILURE;
}

export interface GetProfileSuccess {
  type: typeof GET_PROFILE_SUCCESS;
  payload: {
    profile: Profile;
  }
}

export interface GetProfileFailure {
  type: typeof GET_PROFILE_FAILURE;
  payload: {
    error: string;
  }
}

export interface HandleChangeWallet {
  type: typeof HANDLE_CHANGE_WALLET;
  payload: {
    wallet: number;
  }
}

export interface ChangeWalletSuccess {
  type: typeof CHANGE_WALLET_SUCCESS;
  payload: {
    wallet: number
  }
}

export interface ChangeWalletFailure {
  type: typeof CHANGE_WALLET_FAILURE;
  payload: {
    error: string;
  }
}

/** READ ABOUT IT */
export type AppThunkAction<ReturnType = any> = ThunkAction<ReturnType, RootState, unknown, SyncAction>

export type SyncAction = HandleSigninAction | HandleSignupAction | SigninRequest | SigninSuccess | SigninFailure | SignupRequest | SignupSuccess | SignupFailure | InitializeSuccess | InitializeFailure | LoginSwitch | GetItemsFailure | GetItemsSuccess | ChangePage | HandleAddItem | AddItemSuccess | AddItemFailure | SignoutSuccess | SignoutFailure | GetProfileFailure | GetProfileSuccess | HandleChangeWallet | ChangeWalletSuccess | ChangeWalletFailure
export type RootAction = SyncAction | AppThunkAction
export type RootDispatch = ThunkDispatch<RootState, any, SyncAction>