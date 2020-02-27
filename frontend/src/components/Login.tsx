import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { LoginState } from "../reducers/types";
import { Dispatch } from "redux";
import { RootAction, SyncAction, AppThunkAction } from "../actions/types";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { loginSwitch } from "../actions";
import { Grid } from "@material-ui/core";


export const Login: React.FC = (props) => {

  const state = useSelector<RootState, LoginState>(state => state.login);
  const dispatch = useDispatch<React.Dispatch<RootAction>>();

  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch(loginSwitch(state.page === "signin" ? "signup" : "signin"));
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        {state.page === "signin" ?
          <Signin /> :
          <Signup />
        }
      </Grid>
      <Grid item xs={12} alignItems={"center"}>
        <button onClick={onClick}>{"To " + (state.page === "signin" ? "Sign Up" : "Sign In")}</button>
      </Grid>
    </Grid>
  )
}