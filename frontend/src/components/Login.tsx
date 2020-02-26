import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { LoginState } from "../reducers/types";
import { Dispatch } from "redux";
import { RootAction, SyncAction, AppThunkAction } from "../actions/types";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { loginSwitch } from "../actions";


export const Login: React.FC = (props) => {

  const state = useSelector<RootState, LoginState>(state => state.login);
  const dispatch = useDispatch<React.Dispatch<RootAction>>();

  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch(loginSwitch(state.page === "signin" ? "signup" : "signin"));
  }

  return (
    <div>
      {state.page === "signin" ?
        <Signin /> :
        <Signup />
      }
      <button onClick={onClick}>{"To " + (state.page === "signin" ? "Sign Up" : "Sign In")}</button>
    </div>
  )
}