import { LoginState } from "./types";
import { RootAction, SyncAction, LOGIN_SWITCH, SIGNUP_SUCCESS } from "../actions/types";
import { signinFailure } from "../actions";

const initState: LoginState = {
  page: "signin"
}

export function loginReducer(state = initState, action: SyncAction): LoginState {
  switch (action.type) {
    case LOGIN_SWITCH:
      return {
        page: action.payload.page
      }
    case SIGNUP_SUCCESS:
      return {
        page: 'signin'
      }
    default: return state;
  }
}