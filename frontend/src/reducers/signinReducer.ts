import { SigninState } from "./types";
import { SyncAction } from "../actions/types";

const initState: SigninState = {
  username: '',
  password: '',
  requestSignin: false,
  error: ''
}

export function signinReducer(state = initState, action: SyncAction): SigninState {
  switch (action.type) {
    case "HANDLE_SIGNIN": {
      return { ...state, username: action.payload.username, password: action.payload.password }
    }
    case "SIGNIN_REQUEST": {
      return { ...state, requestSignin: true }
    }
    case "SIGNIN_SUCCESS": {
      return { ...initState }
    }
    case "SIGNIN_FAILURE": {
      return { ...state, error: action.payload.error }
    }
    default: {
      return state
    }
  }
}

