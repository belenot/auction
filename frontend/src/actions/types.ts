import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { LoginState, SystemState } from "../reducers/types";
import { Item } from "../types";

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

/** READ ABOUT IT */
export type AppThunkAction<ReturnType = void> =
  ThunkAction<
    ReturnType,
    RootState,
    unknown,
    SyncAction
  >

export type SyncAction = HandleSigninAction | HandleSignupAction | SigninRequest | SigninSuccess | SigninFailure | SignupRequest | SignupSuccess | SignupFailure | InitializeSuccess | InitializeFailure | LoginSwitch | GetItemsFailure | GetItemsSuccess | ChangePage
export type RootAction = SyncAction | AppThunkAction