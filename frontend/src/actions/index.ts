import { SyncAction, HANDLE_SIGNIN, HANDLE_SIGNUP, AppThunkAction, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE, INITIALIZE_SUCCESS, INITIALIZE_FAILURE, SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS, LoginSwitch, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE, CHANGE_PAGE, HANDLE_ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE, SIGNOUT_SUCCESS, SIGNOUT_FAILURE, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE, HANDLE_CHANGE_WALLET, CHANGE_WALLET_SUCCESS, CHANGE_WALLET_FAILURE } from "./types";
import { default as axios } from 'axios';
import { LoginState, SystemState, AddItemState } from "../reducers/types";
import { Item, Profile } from "../types";

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

export function changePage(page: SystemState['page']): SyncAction {
  return {
    type: CHANGE_PAGE,
    payload: {
      page
    }
  }
}

export function handleAddItem(state: AddItemState): SyncAction {
  return {
    type: HANDLE_ADD_ITEM,
    payload: {
      state: { ...state }
    }
  }
}

export function addItemSuccess(item: Item): SyncAction {
  return {
    type: ADD_ITEM_SUCCESS,
    payload: {
      item
    }
  }
}

export function addItemFailure(error: string): SyncAction {
  return {
    type: ADD_ITEM_FAILURE,
    payload: {
      error
    }
  }
}

export function signoutSuccess(): SyncAction {
  return {
    type: SIGNOUT_SUCCESS
  }
}

export function signoutFailure(): SyncAction {
  return {
    type: SIGNOUT_FAILURE
  }
}

export function getProfileSuccess(profile: Profile): SyncAction {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: {
      profile
    }
  }
}

export function getProfileFailure(error: any): SyncAction {
  return {
    type: GET_PROFILE_FAILURE,
    payload: {
      error
    }
  }
}

export function handleChangeWallet(wallet: number): SyncAction {
  return {
    type: HANDLE_CHANGE_WALLET,
    payload: {
      wallet
    }
  }
}

export function changeWalletSuccess(wallet: number): SyncAction {
  return {
    type: CHANGE_WALLET_SUCCESS,
    payload: {
      wallet
    }
  }
}

export function changeWalletFailure(error: string): SyncAction {
  return {
    type: CHANGE_WALLET_FAILURE,
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
  return async function (dispatch, getState) {
    axios.get('/users')
      .then(r => {
        dispatch(initializeSuccess())
        return r;
      }).then(r => {
        if (r.data._id) {
          dispatch(signinSuccess(r.data.id, r.data.username))
        } else { }
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

export function addItemRequestAsync(form: AddItemState): AppThunkAction {

  return async function (dispatch, getState) {
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('description', form.description);
      formData.append('price', String(form.price));
      form.image ? formData.append('image', form.image) : "";
      const addedItem = await axios.put('/items', formData) as Item;
      dispatch(addItemSuccess(addedItem));
      return new Promise(() => dispatch(changePage('ITEMS_LIST')));
    } catch (e) {
      dispatch(addItemFailure(e));
      console.error(e);
    }
  }
}

export function signoutRequestAsync(): AppThunkAction {
  return async (dispatch, getState) => {
    try {
      await axios.delete('/users/logout')
      dispatch(signoutSuccess());
    } catch (e) {
      console.log(e);
    }
  }
}

export function getProfileRequestAsync(): AppThunkAction {
  return async (dispatch, getState) => {
    try {
      const profile = (await axios.get('/users/profile')).data as Profile
      dispatch(getProfileSuccess(profile))
    } catch (e) {
      dispatch(getProfileFailure(e));
    }
  }
}

export function changeWalletRequestAsync(oldWallet: number): AppThunkAction {
  return async (dispatch, getState) => {
    try {
      const data = (await axios.patch('/users/profile/wallet', { wallet: oldWallet })).data;
      const wallet = (data as { wallet: number }).wallet;
      return dispatch(changeWalletSuccess(wallet));
    } catch (e) {
      return dispatch(changeWalletFailure(e));
    }
  }
}