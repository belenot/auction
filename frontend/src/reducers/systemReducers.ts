import { createStore } from 'redux';
import { SystemState } from './types';
import { SyncAction, SIGNOUT_SUCCESS, GET_PROFILE_SUCCESS, CHANGE_WALLET_SUCCESS } from '../actions/types';

const initState: SystemState = {
  loggedIn: false,
  initialized: false,
  userId: '',
  items: {
    betted: [],
    bought: [],
    own: []
  },
  username: '',
  wallet: 0,
  page: "ITEMS_LIST"
}

export function systemReducer(state = initState, action: SyncAction): SystemState {
  switch (action.type) {
    case "INITIALIZE_SUCCESS":
      return { ...state, initialized: true }
    case "INITIALIZE_FAILURE":
      return { ...state, initialized: false }
    case "SIGNIN_SUCCESS":
      return { ...state, loggedIn: true, userId: action.payload.id, username: action.payload.username }
    case "CHANGE_PAGE":
      return { ...state, page: action.payload.page }
    case GET_PROFILE_SUCCESS:
      return { ...state, ...action.payload.profile }
    case CHANGE_WALLET_SUCCESS:
      return { ...state, wallet: action.payload.wallet, page: 'ITEMS_LIST' }
    case SIGNOUT_SUCCESS:
      return { ...initState }
    default:
      return state
  }
}