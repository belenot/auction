import { combineReducers, createStore } from "redux";
import { signinReducer } from "./signinReducer";
import { systemReducer } from "./systemReducers";
import { signupReducer } from "./signupReducer";
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  signin: signinReducer,
  signup: signupReducer,
  system: systemReducer
})

export type RootState = ReturnType<typeof rootReducer>