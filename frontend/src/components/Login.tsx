import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { LoginState } from "../reducers/types";
import { Dispatch } from "redux";
import { RootAction, SyncAction, AppThunkAction, RootDispatch } from "../actions/types";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { loginSwitch } from "../actions";
import { Grid, Button, Typography } from "@material-ui/core";
import { fullHeight } from "../styles";
import { withTheme } from "@material-ui/styles";

const loginStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.95)",
  boxShadow: "0 0 10px white",
  borderRadius: "10px"
}

export const Login: React.FC = (props) => {

  const state = useSelector<RootState, LoginState>(state => state.login);
  const dispatch = useDispatch<RootDispatch>();

  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch(loginSwitch(state.page === "signin" ? "signup" : "signin"));
  }

  return (
    <div id="login-container">
      <div>
        <div>
          {state.page === "signin" ?
            <Signin /> :
            <Signup />
          }
        </div>
        <div >
          <button className="btn btn-secondary" onClick={onClick}>{"To " + (state.page === "signin" ? "Sign Up" : "Sign In")}</button>
        </div>
      </div>
    </div>
  )
}