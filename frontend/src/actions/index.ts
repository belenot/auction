import { SyncAction, HANDLE_SIGNIN, HANDLE_SIGNUP, AppThunkAction, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE, INITIALIZE_SUCCESS, INITIALIZE_FAILURE, SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS, LoginSwitch, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from "./types";
import { default as axios } from 'axios';
import { LoginState } from "../reducers/types";
import { Item } from "../types";

export function handleSignin(username: string, password: string): SyncAction {
  return { type: HANDLE_SIGNIN, payload: { username, password } }
}

export function handleSignup(username: string, password: string): SyncAction {
  return { type: HANDLE_SIGNUP, payload: { username, password } }
}

export function signinSuccess(id: string, username: string): SyncAction {
  return { type: SIGNIN_SUCCESS, payload: { id, username } }
}

export function signinFailure(error: string): SyncAction {
  return { type: SIGNIN_FAILURE, payload: { error } }
}

export function signinRequest(): SyncAction {
  return {
    type: SIGNIN_REQUEST
  }
}

export function signupSuccess(): SyncAction {
  return { type: SIGNUP_SUCCESS }
}

export function signupFailure(error: string): SyncAction {
  return { type: SIGNUP_FAILURE, payload: { error } }
}

export function signupRequest(): SyncAction {
  return {
    type: SIGNUP_REQUEST
  }
}

export function loginSwitch(page: LoginState['page']): SyncAction {
  return {
    type: "LOGIN_SWITCH",
    payload: {
      page
    }
  }
}

export function initializeSuccess(): SyncAction {
  return {
    type: INITIALIZE_SUCCESS
  }
}

export function initializeFailure(): SyncAction {
  return {
    type: INITIALIZE_FAILURE
  }
}

export function getItemsSuccess(items: Item[]): SyncAction {
  return {
    type: GET_ITEMS_SUCCESS,
    payload: {
      items
    }
  }
}

export function getItemsFailure(error: string): SyncAction {
  return {
    type: GET_ITEMS_FAILURE,
    payload: {
      error
    }
  }
}

export function signinRequestAsync(username: string, password: string): AppThunkAction {
  return function (dispatch, getState) {
    dispatch(signinRequest())
    axios.post('/users', { username, password })
      .then((r) => {
        if (r.status >= 200 && r.status < 300) {
          axios.get('/users').then(r => dispatch(signinSuccess(r.data.id, r.data.username)))
        } else {
          dispatch(signinFailure(r.statusText))
        }
      })
      .catch((error: string) => dispatch(signinFailure(error)))
  }
}

export function signupRequestAsync(username: string, password: string): AppThunkAction {
  return function (dispatch, getState) {
    dispatch(signupRequest())
    axios.put('/users', { username, password })
      .then((r) => {
        if (r.status >= 200 && r.status < 300) {
          dispatch(signupSuccess())
        } else {
          dispatch(signupFailure(r.statusText));
        }
      })
      .catch((error: string) => dispatch(signupFailure(error)))
  }
}

export function initializeRequestAsync(): AppThunkAction {
  return function (dispatch, getState) {
    axios.get('/users')
      .then(r => {
        dispatch(initializeSuccess())
        return r;
      }).then(r => {
        if (r.data._id) {
          dispatch(signinSuccess(r.data.id, r.data.username))
        } else {
          //dispatch(signinFailure(''))//
        }
      })
      .catch(err => dispatch(initializeSuccess()))
  }
}

export function getItemsRequestAsync(): AppThunkAction {
  return async function (dispatch, getState) {
    try {
      const items: Item[] = await axios.get('/items').then(r => r.data as Item[]);
      dispatch(getItemsSuccess(items));
    } catch (error) {
      dispatch(getItemsFailure(error));
    }
  }
}