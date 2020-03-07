import { createStore } from 'redux';
import { SystemState } from './types';
import { SyncAction } from '../actions/types';

const initState: SystemState = {
  loggedIn: false,
  initialized: false,
  userId: '',
  items: [],
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
    default:
      return state
  }
}