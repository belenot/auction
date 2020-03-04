import { combineReducers, createStore } from "redux";
import { signinReducer } from "./signinReducer";
import { systemReducer } from "./systemReducers";
import { signupReducer } from "./signupReducer";
import { loginReducer } from "./loginReducer";
import { itemsListReducer } from "./itemsListReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  signin: signinReducer,
  signup: signupReducer,
  system: systemReducer,
  itemsList: itemsListReducer
})

export type RootState = ReturnType<typeof rootReducer>