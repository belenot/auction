import { combineReducers, createStore } from "redux";
import { signinReducer } from "./signinReducer";
import { systemReducer } from "./systemReducers";
import { signupReducer } from "./signupReducer";
import { loginReducer } from "./loginReducer";
import { itemsListReducer } from "./itemsListReducer";
import { addItemReducer } from "./addItemReducer";
import { changeWalletReducer } from "./changeWalletReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  signin: signinReducer,
  signup: signupReducer,
  system: systemReducer,
  itemsList: itemsListReducer,
  addItem: addItemReducer,
  changeWallet: changeWalletReducer
})

export type RootState = ReturnType<typeof rootReducer>