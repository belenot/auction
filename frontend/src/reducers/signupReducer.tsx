import { SignupState } from "./types";
import { SyncAction } from "../actions/types";

const initState: SignupState = {
  username: '',
  password: '',
  requestSignup: false,
  error: ''
}

export function signupReducer(state = initState, action: SyncAction): SignupState {
  switch (action.type) {
    case "HANDLE_SIGNUP": {
      return { ...state, username: action.payload.username, password: action.payload.password }
    }
    case "SIGNUP_REQUEST": {
      return { ...state, requestSignup: true }
    }
    case "SIGNUP_SUCCESS": {
      return { ...initState }
    }
    case "SIGNUP_FAILURE": {
      return { ...state, error: action.payload.error }
    }
    default: {
      return state
    }
  }
}

