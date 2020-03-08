import { ChangeWalletState } from "./types";
import { RootAction, SyncAction, CHANGE_WALLET_SUCCESS, CHANGE_WALLET_FAILURE, HANDLE_CHANGE_WALLET } from "../actions/types";


const initState: ChangeWalletState = {
  wallet: 0,
  isRequest: false,
  error: ''
}

export function changeWalletReducer(state = initState, action: SyncAction): ChangeWalletState {
  switch (action.type) {
    case HANDLE_CHANGE_WALLET: {
      return { ...state, isRequest: false, wallet: action.payload.wallet }
    }
    case CHANGE_WALLET_SUCCESS: {
      return { ...state, isRequest: false, wallet: 0 }
    }
    case CHANGE_WALLET_FAILURE: {
      return { ...state, isRequest: false, error: action.payload.error }
    }
    default: return state;
  }
}